import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import question from "./question";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/question" component={question} />
      </Switch>
    </Router>

  );
}


export default App;
