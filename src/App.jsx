import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import LandingPageComponents from "./landingPageComponets";
import Product from "./shoppingPageComponents/productPage";
import Cart from "./shoppingPageComponents/cartPage/cart/Cart";
import AlertMessage from "./shoppingPageComponents/alertMessage";
import SearchResultCards from "./shoppingPageComponents/searchResultPage/searchResultCards";
import SearchPage from "./shoppingPageComponents/searchResultPage";
import Loader from "./loaderComponents";

function App() {
  return (
    <>
      <Loader />
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPageComponents />
          </Route>
          <Route path="/products">
            <Product />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
