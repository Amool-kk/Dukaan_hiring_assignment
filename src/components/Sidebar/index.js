import React, { useState } from 'react'
import icons from '../../icons';


const Sidebar = () => {
    const [active, setActive] = useState("Payments");

    const menuItems = [
        { title: 'Home' },
        { title: 'Orders' },
        { title: 'Products' },
        { title: 'Delivery' },
        { title: 'Marketing' },
        { title: 'Analytics' },
        { title: 'Payments' },
        { title: 'Tools' },
        { title: 'Discounts' },
        { title: 'Audience' },
        { title: 'Appearance' },
        { title: 'Plugins' },
    ];

    const handleActive = (title) => {
        console.log(title, active)
        setActive(title)
    }

    return (
        <div className="left-side-menu min-h-screen w-48 text-white bg-[#1E2640] p-1.5 relative">
            <div className='px-3 py-2'>
                <div className="flex items-center mb-4 relative">
                    <span className='mr-4'>{icons["Company-Logo"]}</span>
                    <span>
                        <div>
                            <span style={{ fontSize: "15px" }}> Nishyan </span>
                            <span style={{
                                position: "absolute",
                                right: 0,
                                top: "50%",
                                transform: "translate(0, -50%)",
                                cursor: "pointer"
                            }}>{icons["Dropdown"]}</span>
                        </div>
                        <span style={{ textDecorationLine: "underline", fontSize: "13px" }} className="text-[#D2D4D9] cursor-pointer" > Visit store </span>
                    </span>
                </div>
            </div>
            <div className="mb-8 cursor-pointer">
                {menuItems.map((menuItem, index) => (
                    <div key={index} className={"flex items-center mb-1 hover:bg-[#353C53] rounded "+ (active === menuItem.title ? "bg-[#353C53]" : "")} style={{ padding: "8px 16px 8px 16px" }} onClick={()=>handleActive(menuItem.title)}>
                        <span className="mr-4">{icons[menuItem.title]}</span>
                        <span style={{ fontSize: "14px" }}>{menuItem.title}</span>
                    </div>
                ))}
            </div>
            <div className='absolute' style={{
                bottom: "15px",
                left: "50%",
                transform: "translate(-50%, 0)",
                width: "90%",
            }}>
                <div className="bg-[#353C53] flex text-center items-center" style={{ padding: "6px 12px 6px 12px", borderRadius: "4px" }}>
                    <span>{icons["Credits"]}</span>
                    <span className='text-left ml-3'>
                        <div style={{ fontSize: "13px", color: "#C3C5CC" }}>Available Credits</div>
                        <div style={{ fontSize: "16px" }}>222.10</div>
                    </span>
                </div>
            </div>
        </div>

    )
}

export default Sidebar