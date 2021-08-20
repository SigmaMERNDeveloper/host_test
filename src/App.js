import "./App.css";
import {Switch, Route} from "react-router-dom"
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/" component={Register} exact />
      <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
