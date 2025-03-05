import React from 'react'
import { FaRegEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router';

const Footer = () => {
  return (
    <div className='w-full pt-11 pb-4 bg-[#16181C] flex flex-col justify-around'>
        <div className='w-full py-11 flex items-center justify-around flex-col gap-6 md:flex-row text-white'>
             <div className='flex flex-col gap-4 items-start h-[150px] w-[200px]'>
                <span><h1 className='text-[19px] underline'>Date Generale</h1></span>
                <span className='flex flex-col gap-2'>
                    <Link to="/" className='hover:underline cursor-pointer'>Acasa</Link>
                    <Link to="/contact" className='hover:underline cursor-pointer'>Contact</Link>
                    <Link to="/products" className='hover:underline cursor-pointer'>Produse</Link>
                </span>
             </div>

             <div className='flex flex-col gap-4 items-start h-[150px] w-[200px]'>
                <span><h1 className='text-[19px] underline'>Contact Direct</h1></span>
                <span className='flex flex-col gap-3'>
                    <div className='flex gap-2 items-center'>
                        <FaRegEnvelope/>
                        <p>mail@mail.com</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <FaPhoneAlt/>
                        <p>+0123 456 789</p>
                    </div>
                </span>
             </div>
        </div>

        <div className='w-full flex justify-center items-center border-t-[2px] border-[#1D1F24] py-4 text-[#37393f]'>
            ©Copyright Aesthetic Flames 2025
        </div>
    </div>
  )
}

export default Footer