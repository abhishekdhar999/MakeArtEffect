import React from 'react'
import thunder from '../Images/motionarteffect-img9.png'
import moon from '../Images/motionarteffect-img7.png'
export default function PLugin() {
  return (
    <>

<div className='heading flex items-center justify-center flex-col mt-12'>
            <div>
            <h1 className=' text-3xl text-purple-200 font-semibold text-center'>An All-Round Plugin With Powerful Features</h1>
            </div>
            
        </div>

        <div className='sub-heading flex items-center justify-center  min-w-24 mx-auto  max-w-[500px]  my-6 text-center'>
          
          <h1 className=' text-sm text-purple-200 font-light'>Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</h1>
         
          
      </div>
      

       
        
       
       

        <div className="cards mt-24 lg:flex lg:mx-12 mx-0">
  <div className="together flex flex-col items-center justify-center md:flex-row lg:items-stretch">
    <div className="card-left min-w-52  shadow-lg shadow-purple-300 mx-4 my-4 rounded-xl p-4 bg-[#1d152d] w-auto lg:w-auto">
      <div className="card-left-img">
        <img src={thunder} alt="" className=" object-cover rounded-t-xl" />
      </div>
      <div className="text mt-4">
        <h1 className="text-purple-200 text-3xl">Light Weight</h1>
        <p className="text-purple-100 font-light text-lg my-2">Motion Art for Elementor is designed to be lightweight.</p>
      </div>
    </div>

    <div className="card-right min-w-52 shadow-lg shadow-purple-300 mx-4 my-4 rounded-xl p-4 bg-[#1d152d] w-auto lg:w-auto">
      <div className="card-left-img">
        <img src={thunder} alt="" className=" object-cover rounded-t-xl" />
      </div>
      <div className="text mt-4">
        <h1 className="text-purple-200 text-3xl">100% Responsive</h1>
        <p className="text-purple-100 font-light text-lg my-2">Create a consistent visual experience across all devices.</p>
      </div>
    </div>
  </div>

  <div className="card-rbig min-w-52  shadow-lg shadow-purple-300 mx-4   my-4 rounded-xl p-4 bg-[#1d152d] lg:w-auto ">
      <div className="card-left-img">
        <img src={thunder} alt="" className=" object-cover rounded-t-xl" />
      </div>
      <div className="text mt-4">
        <h1 className="text-purple-200 text-3xl">100% Responsive</h1>
        <p className="text-purple-100 font-light text-lg my-2">Create a consistent visual experience across all devices.</p>
      </div>
    </div>
</div>

     
    </>
  )
}
