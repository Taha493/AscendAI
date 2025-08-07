import React from 'react';
import {useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { blogs } from './BlogsList';

const BlogList = () => {
  const navigate = useNavigate();

  const handleBlogClick = (blogId) => {
    // Scroll to top
    window.scrollTo(0, 0);
    // Navigate to blog
    navigate(`/blog/${blogId}`);
  };

  return (
    <div className="bg-[#0a1f44] min-h-screen text-white">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <div 
              key={blog.id}
              onClick={() => handleBlogClick(blog.id)}
              className="bg-zinc-900 rounded-lg overflow-hidden hover:bg-zinc-800/50 transition-colors group cursor-pointer"
            >
              <div className="overflow-hidden">
                <img 
                  src={blog.image}
                  alt={blog.title} 
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <p className="text-gray-400 text-sm mb-2">{blog.category}</p>
                <h3 className="text-lg font-semibold mb-4">
                  {blog.title}
                </h3>
                <div className="flex items-center text-red-500 hover:text-red-400 transition-colors">
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;