// import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className="relative z-40">
            <div className="fixed top-0 left-0 right-0">
                <div className="navbar bg-gray-900 ">
                    <div className="flex-none">
                        <label htmlFor="my-drawer" className="btn btn-square btn-ghost drawer-button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                        <div className="drawer">
                            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                {/* Page content here */}
                            </div>
                            <div className="drawer-side ">
                                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                                    {/* Sidebar content here */}
                                    <Link to="/Products">
                                        <li><a>Products</a></li>
                                    </Link>
                                    <li><a>Sidebar Item 2</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <a className="btn btn-ghost text-xl text-white"><a href="/">daisyUI</a></a>
                    </div>
                    <div className="form-control mx-5">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:pr-36 md:w-auto bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:bg-gray-700 focus:border-gray-500" />
                    </div>
                    <ul className="space-x-1.5">
                        <li className="menu text-sm hover:bg-gray-700 rounded-box"><a href="#">Home</a></li>
                        <li className="menu text-sm hover:bg-gray-700 rounded-box"><a href="#">Home</a></li>
                        <li className="menu text-sm hover:bg-gray-700 rounded-box"><a href="#">Home</a></li>
                        <li className="menu text-sm hover:bg-gray-700 rounded-box"><a href="#">Home</a></li>
                    </ul>
                    <div className="flex-no hidden md:block gap-2">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mx-5">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <Link to="/Profile">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                </Link>
                                <li><a>Settings</a></li>
                                <Link to="/Logout">
                                    <li><a>Logout</a></li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
