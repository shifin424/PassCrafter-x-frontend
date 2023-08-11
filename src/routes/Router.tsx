import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";


const Router: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default Router;
