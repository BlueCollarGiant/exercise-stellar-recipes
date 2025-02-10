let recipesHTML = '';

recipes.forEach((recipe) => {
  recipesHTML += `
    <div class="recipe-container clickable" 
         data-recipe-id="${recipe.id}" 
         onclick="toggleRecipeDetails('${recipe.id}')">
      
      <!-- Recipe Image -->
      <img class="recipe-image" 
           src="${recipe.image}" 
           alt="${recipe.title}">
      
      <!-- Recipe Details -->
      <div class="recipe-details">
        <h2 class="recipe-title">${recipe.title}</h2>
        <p class="recipe-description">${recipe.description}</p>
        <button class="add-to-favorites-button">❤️ Add to Favorites</button>
      </div>

      <!-- Hidden Details Section -->
      <div class="recipe-full-details" id="details-${recipe.id}">
        <div class="ingredients">
          <h3>Ingredients</h3>
          <ul>
            ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
          </ul>
        </div>
        <div class="steps">
          <h3>Steps</h3>
          <ol>
            ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
          </ol>
        </div>
      </div>
    </div>
  `;
});

document.querySelector('.js-recipes-grid').innerHTML = recipesHTML;

document.querySelectorAll('.add-to-favorites-button').forEach((button) => {
  button.addEventListener('click', () => {
    const recipeId = button.dataset.recipeId; // Get the recipe ID from the data attribute
    console.log(`Added recipe ${recipeId} to favorites!`);
    // Add logic to save the recipe to favorites
  });
});

function toggleRecipeDetails(recipeId) {
  const detailsSection = document.getElementById(`details-${recipeId}`);
  detailsSection.classList.toggle('visible');
}