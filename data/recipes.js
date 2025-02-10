const recipes = [
  {
    id: "1",
    image: "https://www.marthastewart.com/thmb/dlKxe9kD9I9_Yfrqi7c4nMyT3yM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/MSL-338686-spaghetti-carbonara-hero-3x2-69999-560b45d1dd9f4741b717176eff024839.jpeg",
    title: "Spaghetti Carbonara",
    description: "A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
    ingredients: [
      "Spaghetti",
      "Eggs",
      "Parmesan Cheese",
      "Pancetta",
      "Black Pepper"
    ],
    steps: [
      "Cook spaghetti according to package instructions.",
      "In a bowl, whisk eggs and cheese.",
      "Cook pancetta until crispy.",
      "Combine spaghetti, pancetta, and egg mixture.",
      "Serve with extra cheese and pepper."
    ]
  },
  {
    id: "2",
    image: "https://www.allrecipes.com/thmb/8NccFzsaq0_OZPDKmf7Yee-aG78=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AvocadoToastwithEggFranceC4x3-bb87e3bbf1944657b7db35f1383fabdb.jpg",
    title: "Avocado Toast",
    description: "A quick and healthy breakfast option with avocado and toast.",
    ingredients: [
      "Bread",
      "Avocado",
      "Salt",
      "Pepper",
      "Lemon Juice"
    ],
    steps: [
      "Toast the bread to your liking.",
      "Mash avocado with salt, pepper, and lemon juice.",
      "Spread avocado on toast and serve."
    ]
  },
  {
    id: "3",
    image: "https://gimmedelicious.com/wp-content/uploads/2024/10/Skinny-Chicken-Broccoli-Alfredo-1097x1536.jpg",
    title: "Chicken Alfredo",
    description: "Creamy Alfredo sauce over tender chicken and fettuccine.",
    ingredients: [
      "Fettuccine",
      "Chicken Breast",
      "Heavy Cream",
      "Parmesan Cheese",
      "Garlic",
      "Butter"
    ],
    steps: [
      "Cook fettuccine and set aside.",
      "Cook chicken until golden brown.",
      "Prepare Alfredo sauce with cream, garlic, butter, and cheese.",
      "Combine sauce with pasta and chicken.",
      "Serve hot with extra cheese."
    ]
  },
  {
    id: "4",
    image: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/07/Caprese-Salad-2-2.jpg",
    title: "Caprese Salad",
    description: "A fresh and simple Italian salad with mozzarella, tomatoes, and basil.",
    ingredients: [
      "Fresh Mozzarella",
      "Tomatoes",
      "Fresh Basil",
      "Olive Oil",
      "Balsamic Glaze",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Slice mozzarella and tomatoes.",
      "Layer slices with basil leaves.",
      "Drizzle with olive oil and balsamic glaze.",
      "Sprinkle with salt and pepper."
    ]
  },
  {
    id: "5",
    image: "https://www.tasteofhome.com/wp-content/uploads/2024/09/Secret-Ingredient-Chocolate-Chip-Cookies_EXPS_RC24_275664_P2_MD_04_03_12b.jpg",
    title: "Chocolate Chip Cookies",
    description: "Classic cookies with gooey chocolate chips.",
    ingredients: [
      "All-Purpose Flour",
      "Butter",
      "Brown Sugar",
      "White Sugar",
      "Chocolate Chips",
      "Eggs",
      "Vanilla Extract",
      "Baking Soda",
      "Salt"
    ],
    steps: [
      "Preheat oven to 350°F (175°C).",
      "Mix wet and dry ingredients separately.",
      "Combine ingredients and fold in chocolate chips.",
      "Scoop dough onto baking sheet.",
      "Bake for 10-12 minutes."
    ]
  },
  {
    id: "6",
    image: "https://kristineskitchenblog.com/wp-content/uploads/2024/01/vegetable-stir-fry-22-3.jpg",
    title: "Vegetable Stir Fry",
    description: "A quick and healthy vegetable stir fry with soy sauce and garlic.",
    ingredients: [
      "Broccoli",
      "Carrots",
      "Bell Peppers",
      "Snap Peas",
      "Soy Sauce",
      "Garlic",
      "Ginger",
      "Sesame Oil"
    ],
    steps: [
      "Heat sesame oil in a wok or skillet.",
      "Add garlic and ginger, sauté briefly.",
      "Add vegetables and stir fry until tender-crisp.",
      "Add soy sauce and toss to coat.",
      "Serve hot over rice or noodles."
    ]
  },
  {
    id: "7",
    image: "https://www.abeautifulplate.com/wp-content/uploads/2015/08/the-best-homemade-margherita-pizza-1-4.jpg",
    title: "Margherita Pizza",
    description: "Classic pizza with fresh mozzarella, basil, and tomato sauce.",
    ingredients: [
      "Pizza Dough",
      "Tomato Sauce",
      "Fresh Mozzarella",
      "Fresh Basil",
      "Olive Oil"
    ],
    steps: [
      "Preheat oven to 475°F (245°C).",
      "Roll out pizza dough.",
      "Spread tomato sauce evenly.",
      "Top with mozzarella slices and basil leaves.",
      "Bake for 10-15 minutes until golden brown."
    ]
  },
  {
    id: "8",
    image: "https://cdn.urbancookery.com/2021/01/bbq_tacos_1.jpg__900x739_q85_crop.jpg",
    title: "Beef Tacos",
    description: "Flavorful beef tacos with fresh toppings.",
    ingredients: [
      "Ground Beef",
      "Taco Seasoning",
      "Taco Shells",
      "Lettuce",
      "Tomatoes",
      "Cheddar Cheese",
      "Sour Cream"
    ],
    steps: [
      "Cook ground beef with taco seasoning.",
      "Warm taco shells in the oven.",
      "Assemble tacos with beef and toppings.",
      "Serve with lime wedges."
    ]
  },
  {
    id: "9",
    image: "https://www.texanerin.com/content/uploads/2014/08/honey-lemonade-2-650x975.jpg",
    title: "Lemonade",
    description: "Refreshing homemade lemonade.",
    ingredients: [
      "Lemons",
      "Sugar",
      "Water",
      "Ice"
    ],
    steps: [
      "Juice the lemons.",
      "Dissolve sugar in water to make a syrup.",
      "Mix lemon juice, syrup, and water.",
      "Serve over ice."
    ]
  },
  {
    id: "10",
    image: "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_913/k%2FPhoto%2FRecipes%2F2023-04-banana-pancakes%2FBanana-Pancakes-Syrup",
    title: "Banana Pancakes",
    description: "Fluffy pancakes with ripe bananas.",
    ingredients: [
      "All-Purpose Flour",
      "Bananas",
      "Eggs",
      "Milk",
      "Butter",
      "Sugar",
      "Baking Powder",
      "Salt"
    ],
    steps: [
      "Mash bananas and mix with wet ingredients.",
      "Combine with dry ingredients to form batter.",
      "Cook pancakes on a griddle.",
      "Serve with syrup and butter."
    ]
  }
];


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