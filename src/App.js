
import {
  BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import './App.css';
import Home from "./pages/home/home";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">register</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
         
        </Switch>
      </div>
    </Router>
  );
}

export default App;
