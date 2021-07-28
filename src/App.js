import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Save from "./components/Save";
import List from "./components/List";
import Update from "./components/Update";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <List/>
          </Route>
          <Route path="/add">
            <Save/>
          </Route>
          <Route path="/update/:id">
            <Update/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
