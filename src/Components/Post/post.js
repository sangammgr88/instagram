import React from 'react'
import { HiDotsHorizontal } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa";
// import grami from "../assets/grami.jpg";
export const Post = () => {
  return (
    <div>
      <div className="flex items-center pl-48 mt-10 gap-x-3">
  <div className="flex items-center gap-x-3 flex-grow">
    <div>
      <img
        className="rounded-full border border-black h-14"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxBBFZErLx5h3D7JTqnaWy8fzD6e93lxTpKw&shttps://play-lh.googleusercontent.com/aTTVA77bs4tVS1UvnsmD_T0w-rdZef7UmjpIsg-8RVDOVl_EVEHjmkn6qN7C0teRS3o"
        alt=""
      />
    </div>
    <div className="gap-y-1">
      <h1 className="text-lg">garima_stha</h1>
      <p className="text-sm text-gray-400">location</p>
    </div>
  </div>
  <HiDotsHorizontal className="ml-auto mr-[30%] text-gray-600 text-lg" />
</div>
<div>
    <img className='h-96 w-96 ml-56 mt-6' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT4qGwOyrDKN6OLIWBIaK06HAXK_kZWNed_Q&s' alt="" />
  </div>
  <div className='flex gap-x-3 ml-48 mt-7'>
  <FaRegHeart className='size-6' />
  <FaRegComment className='size-6' />
  <FiSend className='size-6' />
  <FaRegBookmark className='size-6 ml-80' />
</div>

  <div className='flex ml-48 mt-4 gap-x-2'>
    <h1 className='font-bold'>garima_stha</h1>
    <p>this is my family....</p>
  </div>
{/* 2nd */}
  <div className="flex items-center pl-48 mt-10 gap-x-3">
  <div className="flex items-center gap-x-3 flex-grow">
    <div>
      <img
        className="rounded-full border border-black h-14"
        src="https://play-lh.googleusercontent.com/aTTVA77bs4tVS1UvnsmD_T0w-rdZef7UmjpIsg-8RVDOVl_EVEHjmkn6qN7C0teRS3o"
        alt=""
      />
    </div>
    <div className="gap-y-1">
      <h1 className="text-lg">me.s0n._.49</h1>
      <p className="text-sm text-gray-400">location</p>
    </div>
  </div>
  <HiDotsHorizontal className="ml-auto mr-[30%] text-gray-600 text-lg" />
</div>
<div>
    <img className='h-80 w-96 ml-56 mt-6' src="https://upload.wikimedia.org/wikipedia/en/1/1c/Griffin_family.png" alt="" />
  </div>
  <div className='flex gap-x-3 ml-48 mt-7'>
  <FaRegHeart className='size-6' />
  <FaRegComment className='size-6' />
  <FiSend className='size-6' />
  <FaRegBookmark className='size-6 ml-80' />
</div>

  <div className='flex ml-48 mt-4 gap-x-2'>
    <h1 className='font-bold'>me.s0n._.49</h1>
    <p>this is my family....</p>
  </div>

  <div className="flex items-center pl-48 mt-10 gap-x-3">
  <div className="flex items-center gap-x-3 flex-grow">
    <div>
      <img
        className="rounded-full border border-black h-14"
        src="https://play-lh.googleusercontent.com/aTTVA77bs4tVS1UvnsmD_T0w-rdZef7UmjpIsg-8RVDOVl_EVEHjmkn6qN7C0teRS3o"
        alt=""
      />
    </div>
    <div className="gap-y-1">
      <h1 className="text-lg">me.s0n._.49</h1>
      <p className="text-sm text-gray-400">location</p>
    </div>
  </div>
  <HiDotsHorizontal className="ml-auto mr-[30%] text-gray-600 text-lg" />
</div>
<div>
    <img className='h-80 w-96 ml-56 mt-6' src="https://upload.wikimedia.org/wikipedia/en/1/1c/Griffin_family.png" alt="" />
  </div>
  <div className='flex gap-x-3 ml-48 mt-7'>
  <FaRegHeart className='size-6' />
  <FaRegComment className='size-6' />
  <FiSend className='size-6' />
  <FaRegBookmark className='size-6 ml-80' />
</div>

  <div className='flex ml-48 mt-4 gap-x-2'>
    <h1 className='font-bold'>me.s0n._.49</h1>
    <p>this is my family....</p>
  </div>
    </div>
  )
}
