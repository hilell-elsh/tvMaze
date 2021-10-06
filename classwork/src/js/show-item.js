export function getShowItemComponent(item) {
	const element = document.createElement('div');
	element.classList.add('show-item');
	element.innerHTML = item.name;
	return {
		element,
	};
}
