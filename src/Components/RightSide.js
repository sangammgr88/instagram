import React from 'react'
import proflie from "../assets/profile.jpg";

function RightSide() {
  return (
    <div>
    <div>
      <div className='flex mt-11 ml-20 gap-x-3'>
      <img className="rounded-full h-11 w-11  border-2 border-black" src="https://i.pinimg.com/originals/67/6e/cb/676ecb6b2285efc0fd531383c8567a26.jpg" alt="" />
      <div>
      <h1 className='font-bold'>sangam_magarrr</h1>
      <p className='font-light'>SanGaM MaGaR</p>
      </div>
      <p className='font-bold text-blue-600 ml-14'>Switch</p>
    </div>
    <div className='inline-flex ml-20 text-xs mt-10'>
      <p>Suggested for you</p>
      <p className='ml-48'>See All</p>
    </div>
    </div>
    <div className='flex mt-4 text-xs'>
      <div>
      
      <img className=' ' src={proflie} alt="" />
      </div>
    <div className='ml-20'>
      <h1>Sangam_Magarrr</h1>
      <p className='font-thin text-gray-400'>followed by me.s0n._.49</p>
      </div>
      <div className='ml-36'>
        <p className='text-blue-600'>Follow</p>
        </div>
    </div>
    <div className='flex text-xs '>
    <div className='ml-20 '>
      <img src="" alt="" />
      <h1>Sangam_Magarrr</h1>
      <p className='font-thin text-gray-400'>followed by me.s0n._.49</p>
      </div>
      <div className='ml-36 text-xs '>
        <p className='text-blue-600'>Follow</p>
        </div>
    </div>
    <div className='flex text-xs'>
    <div className='ml-20  '>
      <img src="" alt="" />
      <h1>Sangam_Magarrr</h1>
      <p className='font-thin text-gray-400'>followed by me.s0n._.49</p>
      </div>
      <div className='ml-36'>
        <p className='text-blue-600'>Follow</p>
        </div>
    </div>
    <div className='flex text-xs '>
    <div className='ml-20 '>
      <img src="" alt="" />
      <h1>Sangam_Magarrr</h1>
      <p className='font-thin text-gray-400'>followed by me.s0n._.49</p>
      </div>
      <div className='ml-36'>
        <p className='text-blue-600'>Follow</p>
        </div>
    </div>
    <div className='ml-16 text-xs mt-7 text-gray-400'>
      <h1>About.Help.Press.API.Jobs.Privacy.Terms.Locations.
        <br />Language.Meta Verified</h1>
      <p>© 2024 Instagram from Meta</p>
    </div>
    </div>
  )
}

export default RightSide