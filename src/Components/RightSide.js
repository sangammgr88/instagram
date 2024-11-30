import React from 'react'

function RightSide() {
  return (
    <div>
      <div className='flex mt-11 ml-20 gap-x-3'>
      <img className="rounded-full h-11 w-11  border-2 border-black" src="https://i.pinimg.com/originals/67/6e/cb/676ecb6b2285efc0fd531383c8567a26.jpg" alt="" />
      <div>
      <h1 className='font-bold'>sangam_magarrr</h1>
      <p className='font-light'>SanGaM MaGaR</p>
      </div>
      <p className='font-bold text-blue-600 ml-14'>Switch</p>
    </div>
    <div className='flex ml-20 text-sm'>
      <p className=''>Suggested for you</p>
      <p className='ml-20'>See All</p>
    </div>
    </div>
  )
}

export default RightSide