import React from 'react'
import MotionArtEffectlogo from '../Images/MotionArtEffect-logo.png'
export default function HomePage() {
    return (
        <>
        <div class="liquid-background"></div>
            <div className='all'>

                <div className='flex items-center justify-between mx-8 my-12 '>
                    <div className='logo'>
                        <img className='' src={MotionArtEffectlogo} alt="" />
                    </div>

                    <div>
                        <button className=' lg:block hidden h-16 w-60 bg-white hover:bg-transparent hover:text-white border border-white rounded-xl text-black text-xl'>Purchase Now</button>
                    </div>
                </div>


                <div className='flex mx-12 my-24 md:flex-row flex-col items-center '>
                    <div className='left '>
                        <span>
                            <h1 className=' text-xl bg-clip-text text-transparent bg-gradient-to-r from-orange-500  to-purple-400 '>Trans<span className='bg-clip-text text-transparent bg-purple-600'>form Your</span> </h1>
                            <h1 className='text-xl bg-clip-text text-transparent bg-gradient-to-r from-orange-500  to-pink-700 '>Webs<span className='bg-clip-text text-transparent bg-purple-600'>ite</span></h1>
                            <p className='text-xl my-4 text-purple-100'>With Motion Art Effect</p>
                        </span>
                    </div>

                    <div className='right mx-12 md:max-w-[600px] xl:max-w-full lg:mx-60 text-center md:text-left lg:w-auto lg:text-5xl'>
                        <div className='heading '>
                            <h1 className='text-5xl  text-purple-100 font-semibold lg:text-6xl'>Attract Your Visitors 
                             <div className=''>
                                <h1 className='text-5xl  text-purple-100 font-semibold my-4 lg:text-6xl'>Attention With Colorful</h1>  </div>
                            <span className=' bg-clip-text text-transparent bg-gradient-to-r from-orange-500  to-purple-800 font-bold text-6xl lg:text-7xl '>Motion Art Effect</span></h1>
                        </div>


                        <div className='text my-8  text-lg'><p className='bg-purple-600 p-2 rounded-lg'>Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website.</p> </div>
                    </div>
                 </div>
            </div>
        </>
    )
}
