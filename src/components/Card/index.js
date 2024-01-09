import React from 'react'

const Card = ({ title, value }) => {
    return (
        <>
            <div className='bg-white flex-1 shadow-md' style={{
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "inherit"
            }}>
                <div className='text-[#4C4C4C]' style={{ marginBottom: "4px", fontSize: "16px" }} >{title}</div>
                <div style={{ fontSize: "32px" }}>{value}</div>
            </div>
        </>
    )
}

export default Card