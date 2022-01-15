import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import Login from './containers/Login';
import Dashboard from "./components/Dashboard/Dashboard";

import './App.css';

function App({ auth }) {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route exact element={<Login />} path="/" />
          <Route exact element={<Dashboard />} path="/dashboard" />
        </Routes>
      </Router>
    </div>
  );
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(App);
