import { elements } from "./base";

// image_url: "http://forkify-api.herokuapp.com/images/PizzaMonkeyBread67f8.jpg";
// publisher: "What's Gaby Cooking";
// publisher_url: "http://whatsgabycooking.com";
// recipe_id: "ead4e0";
// social_rank: 99.99999570141472;
// source_url: "http://whatsgabycooking.com/pizza-monkey-bread/";
// title: "Pizza Monkey Bread";

// private function
const renderRecipe = (recipe) => {
  console.log(recipe);
  const markup = `
  <li>
        <a class="results__link" href="#${recipe.recipe_id}">
              <figure class="results__fig">
                <img src="${recipe.image_url}" alt="Test" />
              </figure>
              <div class="results__data">
                <h4 class="results__name">${recipe.title}</h4>
                <p class="results__author">${recipe.publisher}</p>
              </div>
        </a>
    </li>
  `;

  elements.searchResultList.insertAdjacentHTML("beforeend", markup);
};

export const clearSearchQuery = () => {
  elements.searchInput.value = "";
};

export const clearSearchResult = () => {
  elements.searchResultList.innerHTML = "";
};
export const getInput = () => elements.searchInput.value;
export const renderRecipes = (recipes) => {
  recipes.forEach(renderRecipe);
};
