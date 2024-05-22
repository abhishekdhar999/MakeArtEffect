import React from 'react'
import page from '../Images/motionarteffect-img10.png'
import smallLogo from '../Images/motionarteffect-img8.png'
export default function Apply() {
  return (
    <>
      <div>
      <div className=' flex justify-center items-center my-16 '>
            <h1 className='text-3xl bg-purple-600 p-2 font-semibold rounded-xl'>Apply On Any Section Or Enable For Whole Page</h1>
        </div>
        <div className='h-[700px]'>
        <div className='box lg:mx-24  flex md:flex-row flex-col mx-6 m-4 '>
        <div className='section mb-12 mx-2 w-auto p-8 rounded-lg bg-[#1d152d] '>
<div className='text text-center md:text-left '>
<h1 className='text-2xl font-bold text-purple-200'>Apply On Section</h1>
    <p className='text-lg my-6 font-semibold text-purple-100 text-light'>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website.</p>
</div>
<div className='second'>
                <img src={page} alt="" />
            </div>
</div>

<div className='page mt-20 mx-2 mb-0  w-auto p-8 rounded-lg bg-[#1d152d]  '>
<div className='text text-center md:text-left'>
<h1 className='text-2xl font-bold text-purple-200 '>Apply On Pages</h1>
    <p className='text-lg my-6 font-semibold text-purple-100 text-light'>Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.</p>
</div>
<div className='second '>
                <img className='' src={page} alt="" />
            </div>
</div>
        </div>
        </div>
        
      </div>

      <div className='support mt-[700px] mx-6 md:mt-[20px]    bg-[#1d152d] p-8 rounded-lg' >
<div className='heading flex items-center justify-center my-4 text-center'>
    <h1 className='text-3xl font-semibolb text-purple-200'>Supported by All Popular Browsers</h1>
</div>
<div className='sub-heading flex items-center justify-center text-center'>
    <p className='text-lg font-medium my-4 text-purple-100'>Rest assured, Motion Art is designed to be compatible with all major web browsers.</p>
</div>
<div className='logos my-4 flex items-center justify-center'>
    <div className='logo-img'>
        <img src={smallLogo} alt="" />
    </div>
    
</div>
      </div>
    </>
  )
}
