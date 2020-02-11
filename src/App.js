import React from "react";
import { Title } from "./components/Title";
import { Artists } from "./components/Artists";
import { Albums } from "./pages/Albums"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "bulma/css/bulma.css";
import "./App.css";
import { Songs } from "./pages/Songs";

function App() {

  return (
    <Router>
      <Title/>
       <Switch>
          <Route exact path='/albums/:id' component={Albums}/>
          <Route exact path='/songs/:id' component={Songs}/>
          <Route exact path='/' component={Artists}/>
        </Switch>
    </Router>
  )
}

export default App;
