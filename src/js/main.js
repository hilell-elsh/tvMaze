import { getShowListComponent } from "./show-list.js";
import { getSearchForm } from "./search-form.js";

const contentElement = document.querySelector('.content');
const topHeaderElement = document.querySelector(".top-header");

const showListComponent = getShowListComponent();
const searchFormComponent = getSearchForm(function (searchQuery) {
    showListComponent.search(searchQuery);
    });

contentElement.prepend(showListComponent.element);

topHeaderElement.insertBefore(
    searchFormComponent.element, 
    topHeaderElement.querySelector(".auth-links")
    );
