const checkIsNavigationSupported = () => {
	return Boolean(document.startViewTransition)
}

const fetchPage = async (url) => {
	const res = await fetch(url.pathname)
	const text = await res.text()
	const [, data] = text.match(/<body[^>]*>([\s\S]*)<\/body>/i)
	return data
}
export const viewTransition = () => {
	if (!checkIsNavigationSupported()) return

	window.navigation.addEventListener('navigate', (e) => {
		const toUrl = new URL(e.destination.url)

		if (location.origin !== toUrl.origin) return

		// Navegacion mismo dominio

		e.intercept({
			async handler () {
				const data = await fetchPage(toUrl)
				document.startViewTransition(() => {
					document.body.innerHTML = data
					document.documentElement.scrollTop = 0
				})
			}
		})
	})
}