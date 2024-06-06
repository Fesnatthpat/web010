// import React from 'react'
import NavBar from './NavBar';

export default function CardProd() {
    // สร้างอาร์เรย์ที่มีค่าคงที่ขนาด 4 เพื่อใช้ในการลูป
    const loopArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    return (
        <div>
                <NavBar />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-40 p-32 ">
                    {/* ใช้ map function เพื่อลูปผ่านอาร์เรย์ loopArray และสร้างแบบการ์ดสำหรับแต่ละไอเท็ม */}
                    {loopArray.map((_, index) => (
                        <div key={index} className="card bg-base-100 shadow-xl ">
                            <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    )
}
