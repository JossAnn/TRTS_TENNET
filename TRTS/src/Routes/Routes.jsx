import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../Pages/Login/Login';
import RegisterPage from '../Pages/Register/RegisterPage';
import Containers from '../Pages/Containers/Containers';
import NewContainer from '../Pages/NewContainer/NewContainer';
import CurrentContainer from '../Pages/CurrentContainer/CurrentContainer';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path='/containers' element={<Containers />} />
        <Route path='/newcontainer' element={<NewContainer />} />
        <Route path='/currentcontainer' element={<CurrentContainer />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
