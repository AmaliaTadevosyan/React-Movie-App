import React from "react";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Series from "./components/pages/Series";
import Movies from "./components/pages/Movies";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/series' component={Series} />
          <Route path='/movies' component={Movies} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
