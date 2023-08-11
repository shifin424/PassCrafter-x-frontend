import React from 'react'
import Image from '../assets/Images/password-img-og.png'

function Home() {
  return (
    <div>
  <div className="flex flex-col md:flex-row">
    <div className="flex-1  md:w-1/2">
        <img src={Image} alt="Image" className="h-full w-full object-cover" />
    </div>
    <div className="flex-1  p-10 flex flex-col justify-center items-center md:items-start md:w-1/2">
        <div className="mb-8 text-center md:text-left">
            <h1 className="text-4xl font-semibold font-serif mb-4">
                PassCrafter-X: Crafting Super Strong Passwords Just For You
            </h1>
            <p className="text-gray-600">
                Generate strong and secure passwords to protect your online accounts. Customize your password criteria and ensure your data's safety.
            </p>
        </div>
        <div className="mb-4 md:mb-0 space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition w-full md:w-auto">
                Generate Password
            </button>
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition w-full md:w-auto">
                Add Password
            </button>
        </div>
    </div>
</div>




    </div>
  )
}

export default Home
