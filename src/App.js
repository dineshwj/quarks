import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Giphy from "./container/Giphy/index";
import Header from "./component/header/header";
import Home from "./container/Home";
import "../src/assets/sass/main.scss";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/giphy" component={Giphy} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
