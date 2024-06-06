// import React from 'react'
import { Link } from 'react-router-dom'

export default function Sign_Up() {
    return (
        <div className='flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-900 to-blue-900'>
            <div className="w-full sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-1/3 bg-gray-900 p-6 md:p-10 rounded-xl">
                <div className="text-center text-white uppercase font-medium text-xl">Log In</div>
                <div className="flex flex-col items-center mt-6 md:mt-10">
                    <input type="text" className='block  w-full sm:w-96 py-2 px-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:bg-gray-700 focus:border-gray-500' placeholder="Fname" />
                    <input type="text" className='block mt-4 w-full sm:w-96 py-2 px-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:bg-gray-700 focus:border-gray-500' placeholder="Lname" />
                    <input type="text" className='block mt-4 w-full sm:w-96 py-2 px-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:bg-gray-700 focus:border-gray-500' placeholder="email@" />
                    <input type="password" className='block mt-4 w-full sm:w-96 py-2 px-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:bg-gray-700 focus:border-gray-500' placeholder="Password" />
                    <input type="password" className='block mt-4 w-full sm:w-96 py-2 px-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:bg-gray-700 focus:border-gray-500' placeholder="ConfPassword" />
                    <Link to='/submit'>
                        <button className='bg-blue-600 hover:bg-blue-500 text-white rounded-xl px-6 py-2 mt-6 sm:mt-10 text-sm font-medium'>SUBMIT</button>
                    </Link>
                </div>
                <div className="flex justify-between items-center">
                    <Link to="/Login">
                    <div className="text-white mt-4 md:mt-6 "><a href="#">Sign In</a></div>
                    </Link>
                    {/* <div className="text-white mt-4 md:mt-6"><a href="#">Forgot Password?</a></div> */}
                </div>
            </div>
        </div>
    )
}
