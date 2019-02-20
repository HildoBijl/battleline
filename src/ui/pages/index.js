import { NOT_FOUND } from 'redux-first-router'

import Home from './Home'
import NotFound from './NotFound'

const pages = {
	HOME: {
		component: Home,
		title: 'Stille Rapers',
		skipPrefix: true, // Do not use a prefix in the <title>.
		path: '/(index.html)?', // Make both the base path '/' and '/index.html' point to the Home page. The latter is called when a PWA starts up on a smartphone as local app.
	},
	[NOT_FOUND]: {
		component: NotFound,
		title: 'Oops ...',
		path: '/notfound',
	},
}
for (let name in pages) {
	pages[name].name = name
}
export default pages

export function getTitle(page, payload, user) {
	if (typeof(page.title) === 'function')
		return page.title(payload, user)
	return page.title
}

// Set up a routes object that can be used by redux-first-router.
const routes = {}
for (let name in pages) {
	if (pages[name].path)
		routes[name] = pages[name].path
}
export { routes }