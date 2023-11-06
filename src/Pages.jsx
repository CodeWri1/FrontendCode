import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserLogin from './Components/loginForm/UserLogin';
import RegisterForm from './Components/registerForm/RegisterForm';
import Home from './Components/HomeComponent/Home';
import CreateTicket from './Components/CreateTicket/CreateTicket';
import Dashboard from './Components/Dashboard/Dashboard';
const Pages = () => {
  return (
    <Routes>
      <Route path="/login" element={<UserLogin/>} />
      <Route path="/register" element={<RegisterForm/>} />
      <Route path="/create-tiket" element={<CreateTicket/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/" element={<Home/>} />

    </Routes>
  );
};

export default Pages;
