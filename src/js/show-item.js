export function getShowItemComponent(item) {
    const itemElement = document.createElement('div');
    itemElement.classList.add('show-item');
    const imgSrc = item.image? `<img src="${item.image.medium}"/>` : "";
    itemElement.innerHTML = `<h3>${item.name}</h3>${imgSrc}`;
    const component = {
        element: itemElement,
    }

    return component;
}