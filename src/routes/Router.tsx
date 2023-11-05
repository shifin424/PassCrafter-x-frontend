import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/Home/HomePage";
import Login from "../Components/Login/Login";
import SingUpPage from "../Pages/SignUp/SingUpPage";

const Router: React.FC = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />}></Route>
                <Route path="/sign-up" element={<SingUpPage />}></Route>
            </Routes>
        </div>
    );
};

export default Router;
