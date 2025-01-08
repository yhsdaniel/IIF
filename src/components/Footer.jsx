import React from 'react';

const Footer = () => {
    return (
        <footer className='w-full h-20 mt-8 flex justify-center items-center text-sm relative bottom-0 bg-gray-700'>
            <div className='w-4/12 flex justify-center items-center'>
                {/* <img src={logo} alt="Sample Logo" className='w-20 mix-blend-multiply' /> */}
                <h1 className="text-white text-lg">Dans Express</h1>
            </div>
            <div className='w-4/12 flex justify-center items-center text-white'>
                @ Copyright by 2023 <span className='font-bold'>&nbsp;Daniel Kristiawan.&nbsp;</span>All right reserved
            </div>
        </footer>
    )
}

export default Footer