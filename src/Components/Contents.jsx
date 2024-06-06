// import React from 'react'
import NavBar from './NavBar'
import './Contents.css'
export default function Contents() {
    return (
        <div>
            <NavBar />
            <div className="grid grid-cols-1 gap-3 place-content-center justify-items-center mt-28">
                <div className="post shadow-2xl bg-white rounded-xl overflow-hidden w-2/5 ">
                    <img className="w-full h-96 overflow-hidden object-cover" src="https://images.unsplash.com/photo-1715517157582-c4921c5e29c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div className="text-black text-xl p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, nihil.</div>
                </div>
                <div className="post shadow-2xl bg-white rounded-xl w-2/5">02</div>
                <div className="post shadow-2xl bg-white rounded-xl w-2/5">03</div>
                <div className="post shadow-2xl bg-white rounded-xl w-2/5">04</div>
            </div>

        </div>
    )
}
