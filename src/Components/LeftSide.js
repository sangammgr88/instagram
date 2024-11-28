import React from 'react'
import instalogo from "../assets/instalogo.jpg";
import { MdHomeFilled } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

export const LeftSide = () => {
  return (
    <section className='border-r-2  border-black pr-14'>
    <div className='p-20px h-32 w-32 '>
      <img src={instalogo} alt="" />
    </div>
    <div className='flex gap-2 border border-black pr-16 '>
    <MdHomeFilled className='h-8 w-8' />
    <div className='text-lg'>Home</div>
    </div>
    <div  className='flex gap-2 border border-black pr-16 ' >
    <FaSearch className='h-8 w-8'/>
      <div className='text-lg'>Search</div>
    </div>
    </section>
  )
}
export default LeftSide;