import React from 'react';
import blogData from './blogData'; // Assuming you've imported the blog data

const BLogs = () => {
  return (
    <div className='blogs-container grid grid-cols-2 gap-4 w-full h-auto p-16 bg-cyan-100 ' >
      <div className='col-span-2 flex justify-between'>
      <h1 className='col-span-2 '>Daily News at Nairobi</h1>
      <h1 className='p-2 bg-red-400'>View All</h1>
      </div>
      {blogData.map((blog) => (
        <div key={blog.id} className='blog-post p-16'>
          
          <p className='date text-start'> {blog.date} </p>
          <p className='author text-start'>@ {blog.author}</p>
          <h2 className='  bg-green-300 '>{blog.title}</h2>
          <div className='content'>{blog.content}</div>
          <div className='tags border border-black w-auto absolute p-2'>
            Read more
          </div>
        </div>
      ))}
    </div>
  );
}

export default BLogs;
