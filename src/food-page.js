import React from "react";
import breakfastMenu from "./data/menu-items";
import lunchMenu from "./data/lunch-menu-items";
import dinnerMenu from "./data/dinner-menu-list";
import dessertMenu from "./data/dessert-menu-list";
import appSnackMenu from "./data/app-snack-menulist";
import "./css/food-page.css";
import "./css/commonStyle.css";

let foodItem = "";
let foodIngredients = "";
let foodRecipe = "";
let foodVid = "";
function FoodPage(id, mealType) {
  foodSort(mealType, id);
  return (
    <main className="foodpage_layout">
      <iframe src={foodVid} />
      <h1>{foodItem}</h1>
      <div className="column">
        <div>
          <h3>Ingredients</h3>
          <ul className="ingredient__List">
            <li>{foodIngredients}</li>
          </ul>
        </div>
      </div>
      <div className="column">
        <h3>Recipe</h3>
        <div className="recipe__layout">{foodRecipe}</div>
      </div>
    </main>
  );
}

function foodSort(mealType, idName) {
  if (mealType === "breakfast") Breakfast(idName);
  else if (mealType === "lunch") Lunch(idName);
  else if (mealType === "dinner") Dinner(idName);
  else if (mealType === "dessert") Dessert(idName);
  else if (mealType === "appetizers/snacks") App_Snack(idName);
}

function Breakfast(idName) {
  for (let i = 0; i < breakfastMenu.length; i++) {
    const foodData = breakfastMenu[i];
    displayRecipe(foodData, idName);
  }
}

function Lunch(idName) {
  for (let i = 0; i < lunchMenu.length; i += 1) {
    const foodData = lunchMenu[i];
    displayRecipe(foodData, idName);
  }
}

function Dinner(idName) {
  for (let i = 0; i < dinnerMenu.length; i += 1) {
    const foodData = dinnerMenu[i];
    displayRecipe(foodData, idName);
  }
}

function Dessert(idName) {
  for (let i = 0; i < dessertMenu.length; i += 1) {
    const foodData = dessertMenu[i];
    displayRecipe(foodData, idName);
  }
}

function App_Snack(idName) {
  for (let i = 0; i < appSnackMenu.length; i += 1) {
    const foodData = appSnackMenu[i];
    displayRecipe(foodData, idName);
  }
}

function displayRecipe(foodData, idName) {
  if (idName === foodData.Item) {
    foodItem = foodData.Item;
    foodIngredients = foodData.Ingredients;
    foodRecipe = foodData.Recipe;
    foodVid = foodData.url;
    console.log(foodItem);
    console.log(foodIngredients);
  }
  return;
}
export default FoodPage;
