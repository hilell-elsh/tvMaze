import { getShowItemComponent } from './show-item.js'

const mockShows = [
	{ name: 'Dexter' },
	{ name: 'House' },
	{ name: 'Vikings' },
	{ name: 'Loki' }
]


export function getShowsListComponent() {
	const wrapper = document.createElement('div');
	wrapper.classList.add('shows-list');
	const component = {
		element: wrapper,
		search: function (query) {
		},
	}

	function renderItems(items) {
		wrapper.innerHTML = "";
		items
			.map(item => getShowItemComponent(item).element)
			.map(element => wrapper.appendChild(element));
	}

	renderItems(mockShows);
	return component
}


