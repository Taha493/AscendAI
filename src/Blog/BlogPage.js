import React from 'react';
import BlogList from './BlogList';
const BlogsPage = () => {
return (
    <section className="bg-[#0a1f44] py-20">
    <div className="container mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
        {/* Tag */}
        <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gray-900 text-gray-400 rounded-full text-md">
            Blog
            </span>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Navigating the Tech Landscape with AI Voice Agents
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Dive into a World of Knowledge, Trends, and Tips - Stay Informed and Empowered in the Ever-Evolving Tech Sphere.
        </p>
        </div>

        <BlogList/>
    </div>
    </section>
);
};

export default BlogsPage;