import React from 'react';
import { useParams} from 'react-router-dom';
import { blogs } from './BlogsList';
import BlogList from './BlogList';

const Blog = () => {
  const { id } = useParams();
  const blog = blogs.find(blog => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="bg-[#0a1f44] min-h-screen text-white">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-16">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-red-600">
            {blog.title}
          </h1>
          
          {/* Centered Date */}
          <p className="text-white text-center mb-8">{blog.date}</p>
          
          {/* Hero Image */}
          <div className="rounded-lg overflow-hidden mb-8">
            <img 
              src={blog.image}
              alt={blog.title}
              className="w-full object-cover"
            />
          </div>

          {/* Title after hero image */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6  text-white">
            {blog.title}
          </h2>

          {/* Content */}
          <div className="space-y-8">
            {blog.content.map((section, index) => (
              <div key={index} className="mb-8">
                 {index===0?  <p className="text-gray-400 mb-8">
                  {section.intro}
          </p>:""}
                <h2 className="text-xl md:text-2xl font-semibold mb-4">
                  {`${index + 1}. ${section.title}`}
                </h2>
                <p className="text-gray-400">{section.content}</p>
              </div>
            ))}
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              Read More about Mint
            </h2>
            <BlogList/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
