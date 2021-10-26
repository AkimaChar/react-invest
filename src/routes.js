import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Auth from "./pages/Auth";
import Coin from "./pages/Coin";
import TestCoinsList from "./pages/test";
import User from "./pages/User";

export const useRoutes = isAuth => {
  if (isAuth) {
    return (
      <Switch>
        <Route exact path="/user">
          <User />
        </Route>
        <Route exact path="/coins">
          <TestCoinsList />
        </Route>
        <Route exact path="/coins/:coin">
          <Coin />
        </Route>
        <Route exact path="/admin">
          admin
        </Route>
        <Route exact path="/comments">
          comments
        </Route>
        <Redirect to="/user" />
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
