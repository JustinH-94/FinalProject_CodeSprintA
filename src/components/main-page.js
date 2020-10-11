import React from "react";
import { Link } from "react-router-dom";
import "../css/main-page.css";
import egg from "../image/fried-egg.png";
import burger from "../image/burger.png";
import steak from "../image/steak.png";
import icecream from "../image/icecream.png";
import chipsNdip from "../image/chipsNdip.png";
function MainPage() {
  return (
    <main className="mealType">
      <Link to="/breakfast">
        <button className="mealType__Button">
          <div className="meal_Text">Breakfast</div>
        </button>
      </Link>
      <Link to="/lunch">
        <button className="mealType__Button">
          <div className="meal_Text">Lunch</div>
        </button>
      </Link>
      <Link to="/dinner">
        <button className="mealType__Button">
          <div className="meal_Text">Dinner</div>
        </button>
      </Link>
      <Link to="/dessert">
        <button className="mealType__Button">
          <div className="meal_Text">Dessert</div>
        </button>
      </Link>
      <Link to="/app-snack">
        <button className="mealType__Button">
          <div className="meal_Text">Appetizer/Snacks</div>
        </button>
      </Link>
    </main>
  );
}

export default MainPage;
