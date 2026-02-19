// Toggle filter form visibility
function showFilter() {
    const filterForm = document.getElementById("filterContent");
    const newForm = document.getElementById("newContent");

    filterForm.style.display = "block";
    newForm.style.display = "none";
}

// Toggle add new article form visibility
function showAddNew() {
    const filterForm = document.getElementById("filterContent");
    const newForm = document.getElementById("newContent");

    newForm.style.display = "flex";
    filterForm.style.display = "none";
}

// Filter articles based on checkboxes
function filterArticles() {

    const showOpinion = document.getElementById("opinionCheckbox").checked;
    const showRecipe = document.getElementById("recipeCheckbox").checked;
    const showUpdate = document.getElementById("updateCheckbox").checked;

    const opinions = document.querySelectorAll(".opinion");
    const recipes = document.querySelectorAll(".recipe");
    const updates = document.querySelectorAll(".update");

    opinions.forEach(article => {
        article.style.display = showOpinion ? "block" : "none";
    });

    recipes.forEach(article => {
        article.style.display = showRecipe ? "block" : "none";
    });

    updates.forEach(article => {
        article.style.display = showUpdate ? "block" : "none";
    });
}


// Add new article dynamically
function addNewArticle() {

    const title = document.getElementById("inputHeader").value.trim();
    const text = document.getElementById("inputArticle").value.trim();
    const selectedType = document.querySelector('input[name="articleType"]:checked');

    if (!title || !text || !selectedType) {
        alert("Please complete all fields.");
        return;
    }

    const type = selectedType.value;

    const article = document.createElement("article");
    article.classList.add(type);

    const marker = document.createElement("span");
    marker.classList.add("marker");
    marker.textContent = type.charAt(0).toUpperCase() + type.slice(1);

    const h2 = document.createElement("h2");
    h2.textContent = title;

    const p = document.createElement("p");
    p.textContent = text;

    const readMore = document.createElement("p");
    readMore.innerHTML = `<a href="#">Read more...</a>`;

    article.appendChild(marker);
    article.appendChild(h2);
    article.appendChild(p);
    article.appendChild(readMore);

    document.getElementById("articleList").appendChild(article);

    // Reset form
    document.getElementById("newContent").reset();

    // Immediately re-apply filtering
    filterArticles();
}
