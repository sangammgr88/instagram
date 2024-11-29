import React from 'react'
import instalogo from "../assets/instalogo.jpg";
import { MdHomeFilled } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { RiVideoFill } from "react-icons/ri";
import { FiMessageCircle } from "react-icons/fi";
import { MdOutlineAddBox } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

import proflie from "../assets/profile.jpg";
import { FaThreads } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";



export const LeftSide = () => {
  return (
    <section className='border-r-2  border-gray-300 pr-4 fixed'>
    <div className='p-18px h-32 w-32 '>
      <img src={instalogo} alt="" />
    </div>
    {/* home */}
    <div className='grid gap-y-36'>
    <div className='grid gap-y-4'>
    <div className='flex gap-2  hover:bg-gray-400 hover:cursor-pointer pr-16 '>
    <MdHomeFilled className='h-8 w-8' />
    <div className='text-lg'>Home</div>
    </div>
    <div  className='flex gap-2 hover:bg-gray-400 hover:cursor-pointer pr-16 ' >
    <FaSearch className='h-8 w-8'/>
      <div className='text-lg'>Search</div>
    </div>
    <div className='flex gap-2 pr-16 hover:bg-slate-300 hover:cursor-pointer' >
    <MdOutlineExplore className='h-8 w-8'/>
      <h1 className='text-lg'>Explore</h1>
    </div>
    <div className='flex gap-2 pr-16 hover:bg-slate-300 hover:cursor-pointer'>
    <RiVideoFill className='h-8 w-8'/>
      <h1 className='text-lg'>Reels</h1>
    </div>
    <div className='flex gap-2 pr-16 hover:bg-slate-300 hover:cursor-pointer'>
    <FiMessageCircle className='h-8 w-8'/>
      <h1 className='text-lg'>Message</h1>
    </div>
    <div className='flex gap-2 pr-16 hover:bg-slate-300 hover:cursor-pointer'>
    <MdFavoriteBorder className='h-8 w-8'/>
      <h1 className='text-lg'>Notification</h1>
    </div>
    <div className='flex gap-2 pr-16 hover:bg-slate-300 hover:cursor-pointer'>
    <MdOutlineAddBox className='h-8 w-8'/>
      <h1 className='text-lg'>Create</h1>
    </div>
    <div className='flex gap-2 pr-16 hover:bg-slate-300 hover:cursor-pointer'>
      <img className='h-9 border-1 rounded-full' src={proflie} alt="" />
      <h1 className='text-lg'>Profile</h1>
    </div>
    </div>
    <div className='grid gap-y-5'>
    <div className='flex gap-2 pr-16 hover:bg-slate-300 hover:cursor-pointer'>
    <FaThreads className='h-8 w-8'/>
       <h1 className='text-lg'>Threads</h1>
    </div>
    <div className='flex gap-2 pr-16 hover:bg-slate-300 hover:cursor-pointer'>
    <IoMdMenu className='h-8 w-8'/>
      <h1 className='text-lg'>More</h1>
    </div>
    </div>
   </div>
    </section>
  )
}
export default LeftSide;