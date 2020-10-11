import React from "react";
import Header from "./header";
import Footer from "./footer";
import MainPage from "./main-page";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Search from "./search";
import BreakfastPage from "./breakfast-page";
import LunchMenu from "./lunch-menu";
import FoodPage from "../food-page";
import DinnerMenu from "./dinner-menu";
import DessertMenu from "./dessert-menu";
import AppSnackMenu from "./app-snack-menu";
import "../css/app.css";
import Tempering from "./tempering";
import SousVide from "./sous-vide";
import Brine from "./brine";
import DryAge from "./dry-age";
function App() {
  return (
    <html className="background">
      <BrowserRouter>
        <div className="fore-background">
          <Header />
          <Search />
          <MainPage />
          <Switch>
            <Route path="/breakfast">
              <BreakfastPage />
            </Route>
            <Route path="/lunch">
              <LunchMenu />
            </Route>
            <Route path="/foodpage">
              <FoodPage />
            </Route>
            <Route path="/dinner">
              <DinnerMenu />
            </Route>
            <Route path="/dessert">
              <DessertMenu />
            </Route>
            <Route path="/app-snack">
              <AppSnackMenu />
            </Route>
            <Route path="/tempering">
              <Tempering />
            </Route>
            <Route path="/sousvide">
              <SousVide />
            </Route>
            <Route path="/brine">
              <Brine />
            </Route>
            <Route path="/dryage">
              <DryAge />
            </Route>
          </Switch>

          <footer>
            <Footer />
          </footer>
        </div>
      </BrowserRouter>
    </html>
  );
}

export default App;
