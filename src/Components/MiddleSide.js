import React from 'react';
import story from '../story.json';

import { Post } from '../Components/Post/post';
const MiddleSide = () => {
  const storys = story.story; // Access the "story" array from the JSON file

  return (
    <section>
    <div>
      {/* Scrollable container */}
      <div
        className="flex gap-x-6 overflow-x-auto px-4 pl-20 mt-10 snap-x snap-mandatory"
        style={{
          scrollbarWidth: 'none', // For Firefox
          msOverflowStyle: 'none', // For IE and Edge
        }}
      >
        {storys?.map((item, index) => (
          <div
            key={index}
            className="text-center snap-center flex-shrink-0"
            style={{ width: '80px' }} // Width of each story card
          >
            <img
              className="w-14 h-14 border-2 border-pink-500 rounded-full object-cover"
              src={item.img}
              alt={item.name}
            />
            <h1 className="mt-2 text-sm font-medium text-gray-800 truncate">
              {item.name}
            </h1>
          </div>
        ))}
      </div>

      {/* Hide scrollbar visually */}
      <style jsx>
        {`
          div::-webkit-scrollbar {
            display: none; 
          }
        `}
      </style>
    </div>
{/* post section */}
<div>
  <Post/>
</div>
    </section>
  );
};

export default MiddleSide;
