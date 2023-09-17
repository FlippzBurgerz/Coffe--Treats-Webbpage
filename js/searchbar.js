document.getElementById('sButton').addEventListener('click', mealSearch);
document.getElementById("sInput").addEventListener("keyup", buttonEvent);

mealInfo = document.getElementById('meal');

function buttonEvent(event) {
    
    if (event.key === "Enter") document.getElementById("sButton").click();
};
//skapar måltidssöknings functionen
function mealSearch() {

    const input = document.getElementById('sInput').value;
    const searchResults = document.getElementById('sResults');
    searchResults.innerHTML = "";

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
        .then(response => response.json())
        .then(data => {
            dataDemands(data.meals);
        })
};
//skapar och sedan definerar kraven för varje måltidsobjekt
function dataDemands(data) {
    
    data.forEach(function (element) {
        displayMeals(element);
    });
};
//skapar mallen för hur sökresultaten ska visas
function displayMeals(meal) {

    let name = meal.strMeal;
    let id = meal.idMeal;
//const för att mallen ska vara oförändrad, skickar in id nr till getDetails funktionen, samt så syns namnet på måltiden och inte id nr.
    const mealInfo =
        `<a href="#mealPage">
                <div onclick="getDetails(${id})">
                    <li>
                        <p class="title">${name}</p>
                    </li>
                </div>
                </a>`
    let mealsResults = document.getElementById('sResults');
    let recepie = document.createElement('article');
    recepie.innerHTML = mealInfo;
    mealsResults.appendChild(recepie);
}
//hämtning av måltids detaljer, id nummer skickas från display meals, och data om måltiden med det nummer hämtas.
function getDetails(mealID) {

    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
        .then(res => res.json())
        .then(data => {const meal = data.meals[0];

            addMealToDom(meal);
          });
}
//här tas mål deyaljerna upp, for loopen kollar ingredienser och sedan matas dom in i mealinfo
function addMealToDom(meal) {
    const ingredients = [];
  
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredients.push(
          `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
        );
      } else {
        break;
      }
    }
  
    mealInfo.innerHTML = `
            <section id="info">
            <div id="recepie">
            <h2 class"title">${meal.strMeal}</h2>
                <img id="mealPageImg" src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                    <p>${meal.strInstructions}</p>
                  
                    <th><u>Ingredients:</u></th>
                    <table>
                        ${ingredients.map(ing => `<li>${ing}</li>`).join('')}
                    </table>
            </div>
            </section>
        `;
  }
