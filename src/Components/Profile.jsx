// import React from 'react'
import NavBar from './NavBar'

export default function Profile() {
    return (
        <div className=''>
            <NavBar />
            <div className='flex pt-20 justify-center min-h-screen bg-gradient-to-r from-gray-900 to-blue-900'>
                <div className="w-full sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-1/3 p-6 bg-gray-900 rounded-xl m-5">
                    <div className="flex justify-center item-center">
                        <div className="w-24 rounded-full avatar online">
                            <img className="rounded-full" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div className="text-white text-center mt-2">Natthpat Phummek</div>
                </div>
            </div>
        </div>

    )
}
