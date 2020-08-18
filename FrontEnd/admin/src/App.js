import React from "react";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import InitialScreen from "./components/Dashboard/InitialScreen";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { API } from "./backendapi";

function App() {
  return (
    <div className="App">
      {/* <InitialScreen /> */}
      <Router>
        <Switch>
          <Route exact path="/">
            <InitialScreen />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
