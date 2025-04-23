document.addEventListener('DOMContentLoaded', () => {
  const recipesEl = document.getElementById('recipes');
  const tempDisplay = document.getElementById('temp-display');

  function loadRecipes() {
    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    recipesEl.innerHTML = recipes.map(r =>
      `<div class="recipe"><h3>${r.nom}</h3><p>${r.instructions}</p></div>`
    ).join('');
  }

  function saveRecipe(nom, instructions) {
    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    recipes.push({ nom, instructions });
    localStorage.setItem('recipes', JSON.stringify(recipes));
    loadRecipes();
  }

  if (!localStorage.getItem('recipes')) {
    saveRecipe('Filet mignon basse temp.', 'Cuire à 60°C pendant 2h');
  }

  document.getElementById('read-temp').addEventListener('click', async () => {
    try {
      const temp = Math.floor(55 + Math.random() * 10);
      tempDisplay.textContent = temp + ' °C';
    } catch (err) {
      console.error(err);
      tempDisplay.textContent = 'Erreur';
    }
  });

  loadRecipes();
});
