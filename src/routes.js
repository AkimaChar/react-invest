import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Auth from "./pages/Auth";
import User from "./pages/User";

export const useRoutes = isAuth => {
  if (isAuth) {
    return (
      <Switch>
        <Route exact path="/user">
          <User />
        </Route>
        <Route exact path="/coins">
          coins
        </Route>
        <Route exact path="/coins/:coin">
          user
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
