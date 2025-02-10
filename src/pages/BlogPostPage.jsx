import React from "react";
import { useParams, Link } from "react-router-dom";
import blogPosts from "../data/blogPosts";

const BlogPostPage = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === parseInt(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-light-brown/50 pt-32 pb-20 flex items-center justify-center text-center">
        <div>
          <h1 className="text-5xl font-display font-bold text-dark-brown mb-4">404</h1>
          <p className="text-xl font-body text-dark-green mb-6">Post not found.</p>
          <Link to="/blog" className="px-6 py-3 bg-light-brown text-white rounded-full text-xl hover:bg-light-brown/90 transition duration-300">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light-brown/50 pt-32 pb-20">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url('${post.image}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 p-6">
          <h1 className="text-5xl font-display font-bold text-white mb-4">{post.title}</h1>
          <p className="text-xl font-body max-w-2xl mx-auto">
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* Blog Post Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="text-lg font-body text-dark-green space-y-4">
            {post.content.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Back to Blog Button */}
      <div className="text-center mb-12">
        <Link to="/blog" className="px-6 py-3 bg-light-brown text-white rounded-full text-xl hover:bg-light-brown/90 transition duration-300">
          Back to Blog
        </Link>
      </div>
    </div>
  );
};

export default BlogPostPage;
