import React from "react";
import blogData from "./blogData"; // Assuming you've imported the blog data

const BLogs = () => {
  return (
    <div className="blogs-container  gap-0  md:gap-4 w-full px-4 sm:px-16 bg-slate-100 ">
      <div className="col-span-2 flex justify-between p-4">
        <h1 className="blog-header col-span-2 ">Daily News at Nairobi</h1>
        <h1 className="p-2 bg-red-400">View All</h1>
      </div>
      <div className="blog-semi-container sm:flex gap-4">
      {blogData.map(blog =>
        <div key={blog.id} className="blog-post text-xs md:text-sm p-2 md:p-8  my-2 sm:my-8  bg-slate-200">
          <p className="date text-start">
            {" "}{blog.date}{" "}
          </p>
          <p className="author text-start">
            @ {blog.author}
          </p>
          <h2 className="blog-title text-xs sm:text-sm  ">
            {blog.title}
          </h2>
          <div className="content">
            {blog.content}
          </div>
          <button className="tags border border-black w-auto absolute p-1 sm:p-2 ">
            Read more
          </button>
        </div>
      )}
      </div>
    </div>
  );
};

export default BLogs;
