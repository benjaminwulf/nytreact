import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Components/Nav/Nav"
import Form from './Components/Search/Form';

const App = () =>
    <Router>
       <div>
          <Nav />
          <Switch>
             <Route exact path="/" component={Form} />
          </Switch>
       </div>
    </Router>

export default App;
