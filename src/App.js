import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import UserList from "./components/pages/UserList";
import User from "./components/pages/User";
import Header from "./components/layout/Header";
import { USERS } from "./USERS";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/users" render={() => <UserList users={USERS} />} />
        <Route exact path="/users/:id" component={User} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
