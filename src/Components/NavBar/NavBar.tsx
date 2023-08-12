import React from "react";
import { useNavigate } from "react-router-dom";


function NavBar() {
  const navigate = useNavigate()

  const handleNavigate = () =>{
    navigate('/login')
  }
  return (
    <>
      <nav className="bg-white bg-opacity-75 rounded-full  ml-10 mr-10 mt-6 border-gray-200 shadow-md mb-5  dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            PassCrafter-X 
            </span>
          </a>
          <div className="flex md:order-2">
            <button
              type="button"
              onClick={handleNavigate}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition w-full md:w-auto"
            >
              Login
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
