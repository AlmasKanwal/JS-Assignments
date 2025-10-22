const user = localStorage.getItem("tasteubUser");
if (!user) window.location.href = "login.html";
document.getElementById("userWelcome").innerText = `Hi, ${user}`;

const recipeContainer = document.getElementById("recipeContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortFilter = document.getElementById("sortFilter");
let allRecipes = [];

async function fetchRecipes() {
    const res = await fetch("https://dummyjson.com/recipes");
    const data = await res.json();
    allRecipes = data.recipes;
    populateCategories(allRecipes);
    showRecipes(allRecipes);
}

function showRecipes(recipes) {
    recipeContainer.innerHTML = "";
    if (recipes.length === 0) {
        recipeContainer.innerHTML = `<p class="fs-4 text-secondary">No recipes found.</p>`;
        return;
    }

    recipes.forEach(r => {
        const card = document.createElement("div");
        card.className = "card";
        card.style.width = "18rem";
        card.innerHTML = `
          <img src="${r.image}" class="card-img-top" alt="${r.name}">
          <div class="card-body">
            <h5 class="card-title">${r.name}</h5>
            <p class="card-text">Cuisine: ${r.cuisine}</p>
            <p class="card-text">Prep Time: ${r.prepTimeMinutes} mins</p>
            <button class="btn btn-tasteub">View Recipe</button>
          </div>
        `;
        recipeContainer.appendChild(card);
    });
}

function populateCategories(recipes) {
    const categories = [...new Set(recipes.map(r => r.cuisine))];
    categories.forEach(c => {
        const opt = document.createElement("option");
        opt.value = c;
        opt.textContent = c;
        categoryFilter.appendChild(opt);
    });
}

function filterRecipes() {
    const search = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    const sort = sortFilter.value;

    let filtered = allRecipes.filter(r =>
        r.name.toLowerCase().includes(search) &&
        (category === "all" || r.cuisine === category)
    );

    if (sort === "asc") filtered.sort((a, b) => a.prepTimeMinutes - b.prepTimeMinutes);
    if (sort === "desc") filtered.sort((a, b) => b.prepTimeMinutes - a.prepTimeMinutes);

    showRecipes(filtered);
}

function logout() {
    localStorage.removeItem("tasteubUser");
    window.location.href = "login.html";
}

searchInput.addEventListener("input", filterRecipes);
categoryFilter.addEventListener("change", filterRecipes);
sortFilter.addEventListener("change", filterRecipes);

fetchRecipes();
