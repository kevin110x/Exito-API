import React from "react";
import { Title } from "./components/Title";
import { Artists } from "./components/Artists";
import { Albums } from "./pages/Albums"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "bulma/css/bulma.css";
import "./App.css";

function App() {

  return (
    <Router>
      <Title/>
       <Switch>
          <Route exact path='/albums/:id' component={Albums}/>
          <Route exact path='/' component={Artists}/>
        </Switch>
    </Router>
  )

  // const url = new URL(document.location);
  // const hasId = url.searchParams.has('id');

  // if (hasId) {
  //   return <Albums id={url.searchParams.get('id')}/>
  // }

  // return (
  //   <div className="App">
  //     <Title/>
  //     <Artists/>
  //   </div>
  // );
}

export default App;
