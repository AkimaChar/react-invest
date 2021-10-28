import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Coin from "./pages/Coin";
import TestCoinsList from "./pages/test";
import TrendingCoins from "./pages/TrendingCoins";
import User from "./pages/User";

export const useRoutes = isAuth => {
  if (isAuth) {
    return (
      <Switch>
        <Route exact path="/">
          <User />
        </Route>
        <Route exact path="/coins">
          <TrendingCoins />
        </Route>
        <Route exact path="/coins/:coin">
          <Coin />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route exact path="/comments">
          comments
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route exact path="/signin">
        <Auth />
      </Route>
      <Route exact path="/signup">
        <Auth />
      </Route>
      <Redirect to="/signin" />
    </Switch>
  );
};
