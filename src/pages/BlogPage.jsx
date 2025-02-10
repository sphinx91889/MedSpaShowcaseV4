import React from "react";
import { Link } from "react-router-dom";
import blogPosts from "../data/blogPosts";

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-light-brown/50 pt-32 pb-20">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('https://source.unsplash.com/1600x900/?blog,inspiration')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 p-6">
          <h1 className="text-5xl font-display font-bold text-white mb-4">Our Blog</h1>
          <p className="text-xl font-body max-w-2xl mx-auto">
            Stay informed and inspired with our latest articles on beauty, wellness, and more.
          </p>
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-display text-dark-brown mb-4">{post.title}</h2>
                <p className="text-lg font-body text-dark-green mb-4">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="text-light-brown hover:text-light-brown/80 font-bold text-lg">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
