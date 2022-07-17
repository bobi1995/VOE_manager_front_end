import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//Screens
import Login from '../components/Login';

const MainRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default MainRoute;
