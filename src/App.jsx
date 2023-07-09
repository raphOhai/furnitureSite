import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import LandingPageComponents from "./landingPageComponets";
import Product from "./shoppingPageComponents/productPage";
import Cart from "./shoppingPageComponents/cartPage/cart/Cart";
import AlertMessage from "./shoppingPageComponents/alertMessage";
import SearchResultCards from "./shoppingPageComponents/searchResultPage/searchResultCards";
import SearchPage from "./shoppingPageComponents/searchResultPage";
import Loader from "./loaderComponents";
import { InitializeHandShake } from "fingertipps-handshakes";
import { storeId, visitorId } from "./function/FingertippsApiCall";
import { UserId } from "./shoppingPageComponents/hooks/userId";
import { useEffect } from "react";

function App() {
  UserId();
  const quest = JSON.parse(localStorage.getItem("quest"));
  useEffect(() => {
    if (quest) {
      InitializeHandShake(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDRlY2ZmZTM4ZmE2MjY3MmQzNDllYmQiLCJpYXQiOjE2ODg1ODkwNTJ9.vzbL2l2n2yQxPCfzLClGjEkruThNFfTmNH3yIXsP_aY",
        storeId,
        quest
      );
    }
  }, [quest]);

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
