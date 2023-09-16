import React from 'react';
import blogData from './blogData'; // Assuming you've imported the blog data

const BLogs = () => {
  return (
    <div className='blogs-container grid grid-cols-1 md:grid-cols-2 gap-0  md:gap-4 w-full h-auto px-16 bg-slate-100' >
      <div className='col-span-2 flex justify-between p-4'>
      <h1 className='blog-header col-span-2 '>Daily News at Nairobi</h1>
      <h1 className='p-2 bg-red-400'>View All</h1>
      </div>
      {blogData.map((blog) => (
        <div key={blog.id} className='blog-post p-8  my-8 h-96 bg-slate-200'>
          
          <p className='date text-start'> {blog.date} </p>
          <p className='author text-start'>@ {blog.author}</p>
          <h2 className='blog-title '>{blog.title}</h2>
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
