import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/Home/HomePage";
import Login from "../Components/Login/login";


const Router: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </div>
  );
};

export default Router;
