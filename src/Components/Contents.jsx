// import React from 'react'
import NavBar from './NavBar'
export default function Contents() {
    return (
        <div>
            <NavBar />
            <div className="grid grid-cols-1 gap-4 place-content-center justify-items-center mt-28">
                <div className="bg-white w-2/4 h-96">01</div>
                <div className="bg-white w-2/4 h-96">01</div>
                <div className="bg-white w-2/4 h-96">01</div>
                <div className="bg-white w-2/4 h-96">01</div>
            </div>

        </div>
    )
}
