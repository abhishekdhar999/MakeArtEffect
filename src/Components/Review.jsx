import React from 'react'
import one from '../Images/motionarteffect-img2.png';
import two from '../Images/motionarteffect-img1.png';
import three from '../Images/motionarteffect-img3.png'
import stars from '../Images/motionarteffect-img4.png'
export default function Review() {
    return (
        <> 
        <div className='flex justify-center items-center my-12 text-center mx-6'>
            <h1 className='text-xl text-purple-100 font-semibold'>Trusted by thousands of users around the world</h1>
        </div>
            <div className='lg:flex items-center justify-center '>
{/* first-row */}
                <div className='first-row  flex md:flex-row flex-col items-center justify-around '>
                    <div className='flex items-center justify-center lg:mr-20'>
                        <div className='image'>
                            <img src={one} alt="" />
                        </div>
                        <div className='review mx-4'>
                            <div className='stars'>
                                <img src={stars} alt="" />
                            </div>
                            <div className='rating'>
                                <h1>4.5 Score, 9 reviews</h1>
                            </div>
                        </div>
                    </div>


                    <div className='flex items-center justify-center'>
                        <div className='image'>
                            <img src={two} alt="" />
                        </div>
                        <div className='review mx-4'>
                            <div className='stars'>
                                <img src={stars} alt="" />
                            </div>
                            <div className='rating'>
                                <h1>4.5 Score, 9 reviews</h1>
                            </div>
                        </div>
                    </div>


                </div>
{/* second row */}
                <div>
                    <div className='flex items-center justify-center lg:ml-20'>
                        <div className='image'>
                            <img src={three} alt="" />
                        </div>
                        <div className='review mx-4'>
                            <div className='stars'>
                                <img src={stars} alt="" />
                            </div>
                            <div className='rating'>
                                <h1>4.5 Score, 9 reviews</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
