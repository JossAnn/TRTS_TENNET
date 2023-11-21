import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../Pages/Login/Login';
import RegisterPage from '../Pages/Register/RegisterPage';
import Containers from '../Pages/Containers/Containers';
import NewContainer from '../Pages/NewContainer/NewContainer';
import CurrentContainer from '../Pages/CurrentContainer/CurrentContainer';
import CarboDioxideGraph from '../Pages/Graphics/CarbonDioxideGraph';
import HumidityGraph from '../Pages/Graphics/HumidityGraph';
import Luxmeter from '../Pages/Graphics/Luxmeter';
import TemperatureGraph from '../Pages/Graphics/TemperatureGraph';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path='/containers' element={<Containers />} />
        <Route path='/newcontainer' element={<NewContainer />} />
        <Route path='/currentcontainer' element={<CurrentContainer />} />
        <Route path="/temperature" element={<TemperatureGraph />} />
        <Route path='/humidity' element={<HumidityGraph />} />
        <Route path='/co2' element={<CarboDioxideGraph />} />
        <Route path='/luxometer' element={<Luxmeter />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
