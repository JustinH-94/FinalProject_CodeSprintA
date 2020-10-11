import React from "react";
import { Link } from "react-router-dom";
import FoodPage from "../food-page";
import DinnerMenuList from "../data/dinner-menu-list";
import "../css/menu.css";
function DinnerMenu() {
  return (
    <main>
      <h2>Dinner</h2>
      <div>
        {DinnerMenuList.map((dinnerElement) => {
          return (
            <ul>
              <li>
                <Link
                  to="/foodpage"
                  onClick={() => FoodSelected(dinnerElement.Item)}
                >
                  <button className="food-item__button">
                    {dinnerElement.Item}
                  </button>
                </Link>
              </li>
            </ul>
          );
        })}
      </div>
    </main>
  );
}
function FoodSelected(id) {
  if (id !== "dinner") return FoodPage(id, "dinner");
}
export default DinnerMenu;
