import React from "react";

const FeaturedPosts = ({id}) => {
  const posts = [
    {
      id: 1,
      title: "Building a Portfolio Website",
      description: "A guide to creating your personal developer portfolio.",
      image: "https://via.placeholder.com/400x200",
    },
    {
      id: 2,
      title: "Top 5 React Libraries",
      description: "Essential libraries to supercharge your React apps.",
      image: "https://via.placeholder.com/400x200",
    },
  ];

  return (
    <div id ={id} className="my-6 min-h-screen  py-40">
      <h2 className="text-xl font-bold mb-4">Featured Posts</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{post.title}</h3>
              <p className="text-gray-600">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
