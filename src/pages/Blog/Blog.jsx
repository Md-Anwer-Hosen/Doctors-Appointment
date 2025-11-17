import React from "react";
import { useLoaderData } from "react-router-dom";

const Blog = () => {
  const blogs = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-6 text-center">Doctor Blogs</h1>

      <div className="mt-5">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden mt-5"
          >
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2 text-black">
                {blog.title}
              </h2>
              <p className="text-gray-500 text-sm mb-2">
                {blog.date} | {blog.author} | {blog.category}
              </p>
              <p className="text-gray-700">{blog.content}</p>
              <button className="mt-3 bg-blue-600 text-white px-4 py-1.5 rounded-full hover:bg-blue-700 transition-colors">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
