import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Save from "./components/Save";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            {/* <List/> */}
          </Route>
          <Route path="/add">
            <Save/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
