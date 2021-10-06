
export function getSearchForm(onSelected = noop) {
    const searchForm = document.createElement("form");
    searchForm.classList.add("search-form");

    const searchLine = getSearchLine();
    const searchButton = getSearchButton();
    
    searchForm.appendChild(searchLine);
    searchForm.appendChild(searchButton);

    searchForm.addEventListener("submit", (event) => {
        const inputValue = searchForm.querySelector(".search-line").value;
        event.preventDefault();
        onSelected(inputValue);
    });

    return {
        element: searchForm,
    };
}
    
function getSearchLine() {    
    // create input
    const input = document.createElement("input");
    input.classList.add("search-line");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Search Shows and Peaple");  
    // add "Enter" click event
    // input.addEventListener("keyup", function(event) {
    //     if (event.key === "Enter") {
    //         onSelected(input.value);
    //     }
    // }) 
    // inside to label
    const label = document.createElement("label");
    label.appendChild(input);

    return label;
}

function getSearchButton() {    
    // create button
    const searchButton = document.createElement("button");
    searchButton.classList.add("search-btn");
    searchButton.setAttribute("type", "submit");
    // add onSelected
    // searchButton.addEventListener("click", () => onSelected(input.value));
    // add img
    const insideImg = document.createElement("img");
    const imgSrc = "http://simpleicon.com/wp-content/uploads/magnifier-2.png";
    insideImg.src = imgSrc;
    insideImg.classList.add("submit-img");
    searchButton.appendChild(insideImg);

    return searchButton;
}
