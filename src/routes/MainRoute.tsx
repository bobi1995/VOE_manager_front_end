import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

//Screens
import Login from "../pages/Login";
import Home from "../pages/Home";

const MainRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<PrivateRoute component={Home} />} />
      </Routes>
    </Router>
  );
};

export default MainRoute;
