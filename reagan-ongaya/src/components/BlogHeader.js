import React from "react";

const BlogHeader = ({ id }) => {
  return (
    <header id ={id} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12 mt-10 text-center">
      <h1 className="text-4xl font-extrabold mb-4">Welcome to My Blog</h1>
      <p className="text-lg">Insights, tutorials, and stories from my journey.</p>
    </header>
  );
};

export default BlogHeader;
