import React from 'react'

export default function Footer() {
  return (
    <>
     <div className='all bg-gradient-to-r from-orange-500 via-pink-500 to-blue-700 p-4 text-gray-300 mt-24'>
        <div className='flex items-center justify-center'>
            <div className='mx-6'>
                <h3>Documentation</h3>
            </div>
            <div className='mx-6'>
                <h3>Support</h3>
            </div>
        </div>
        
        <div className='flex items-center justify-center'>
            <h3>© 2023 Copywrite. All rights reserved by QodeMatrix</h3>
        </div>
        </div> 
    </>
  )
}
