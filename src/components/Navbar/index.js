import React from 'react'
import icons from '../../icons'

const Navbar = () => {
    return (
        <div className='w-full flex text-center bg-[#FFFFFF]' style={{
            padding: "12px 32px 12px 32px",
            height: "64px",
            fontSize: "16px"
        }}>
            <div className='flex gap-5 flex-1 items-center'>
                <span>Payments</span>
                <div className='flex' style={{ fontSize: "12px", alignItems: "center", color: "#4C4C4C" }}>
                    <span className='mr-2' style={{ scale: "0.8" }}>{icons["question-mark"]}</span> How it works</div>
            </div>
            <div className='flex-1 bg-[#F2F2F2]' style={{
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                padding: "9px 16px 9px 16px"
            }}>
                <span className='mr-2 cursor-pointer'>{icons["search"]}</span>
                <input type="text" placeholder='Search features, tutorials, etc.' style={{ backgroundColor: "transparent", outline: "none" }} />
            </div>
            <div className='flex-1 relative'>
                <div style={{
                    position: "absolute",
                    right: 0,
                    top: "50%",
                    transform: "translate(0, -50%)",
                }}>
                    <button className='mr-2 bg-[#E6E6E6] relative' style={{ borderRadius: "50%", width: "40px", height: "40px" }}>{icons["notification"]}</button>
                    <button className='mr-2 bg-[#E6E6E6] relative' style={{ borderRadius: "50%", width: "40px", height: "40px" }}>{icons["dropDown-solid"]}</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar