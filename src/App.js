import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Landingpage from "./components/Landingpage";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <div className="App wrapper">
          <Route exact path="/" component={Landingpage} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    </div>
  );
}

export default App;
