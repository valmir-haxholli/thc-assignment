import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from './components/LoginForm/LoginForm';
import Dashboard from "./components/Dashboard/Dashboard";
import { PrivateRoute } from './helpers/PrivateRoute';

import './App.css';

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
        <Route exact path="/" component={LoginForm} />
					<PrivateRoute exact path="/dashboard">
						<Dashboard />
					</PrivateRoute>
					<Route path="*">
						<h1>404 Page not found</h1>
					</Route>
        </Switch>
      </Router>
    </div>
  );
}



export default App;
