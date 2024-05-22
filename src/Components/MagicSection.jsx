import React from 'react'
import magic_wand from '../Images/motionarteffect-img5.png';
import { FaArrowRightLong } from "react-icons/fa6";
export default function MagicSection() {
    return (
        <>
            <div className=' flex justify-between items-center mx-12 my-24 md:flex-row flex-col'>

                <div className='left lg:w-[700px] md:w-[550px] lg:mx-36'>

                    <div className='heading text-4xl text-purple-200 font-medium text-center'>
                        Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
                    </div>
                    <div className='text text-lg text-purple-100 my-6 text-center'>
                        <span>Motion Art for Elementor is a groundbreaking plugin that empowers you to </span>
                        <span>effortlessly infuse your website with brvisually stunning motion art elements.</span>
                    </div>
                    <div className='btn my-4'>

                    <button className='   h-16 w-60 bg-white  text-white  rounded-2xl  text-xl bg-gradient-to-l from-orange-600  to-purple-700'>Purchase from envento 
                  </button>
                   
                    </div>
                </div>

                <div className='right lg:mr-24'>
                    <img src={magic_wand} alt="" />
                </div>
            </div>
        </>
    )
}
