import React, { useState } from "react";
import InputField from '../InputField/InputField'
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div>
      <section>
        <div className="flex flex-col items-center justify-center min-h-screen px-6 py-8 mx-auto">
          <div className="w-full max-w-md bg-white rounded-lg  shadow-md dark:border dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Welcome back!
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <InputField
                  labelText="Your email"
                  inputType="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeHolder="name@company.com"
                />

                <InputField
                  labelText="Password"
                  inputType="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeHolder="••••••••"
                />

                <button
                  type="submit"
                  className="bg-[#4f46e5] hover:bg-[#6f69f0] text-white font-semibold py-2 px-4 rounded-full shadow-md w-full"
                >
                  Sign in
                </button>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    to={'/sign-up'}
                    className="font-medium text-blue-500 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
