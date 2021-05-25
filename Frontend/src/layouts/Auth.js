import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// views

import Login from "views/auth/Login";
import Register from "views/auth/Register";

export default function Auth() {
  return (
    <>
     
      <main>
        <section className="relative w-full h-full pt-20 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + require("assets/img/register_bg_2.png").default + ")",
            }}
          ></div>
          <Switch>
            <Route path="/auth/login" exact component={Login} />
            <Route path="/auth/register" exact component={Register} />
            <Redirect from="/auth" to="/auth/login" />
          </Switch>
          
        </section>
      </main>
    </>
  );
}
