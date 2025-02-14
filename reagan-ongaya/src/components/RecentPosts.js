import React from "react";

const RecentPosts = ({id}) => {
  const posts = [
    { id: 1, title: "How to Use TailwindCSS Effectively", date: "Dec 12, 2024" },
    { id: 2, title: "Understanding React Hooks", date: "Nov 30, 2024" },
    { id: 3, title: "Styling Your App with TailwindCSS", date: "Nov 25, 2024" },
  ];

  return (
    <div id ={id} className="my-6 py-40 min-h-screen">
      <h2 className="text-xl font-bold mb-4">Recent Updated Posts</h2>
      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-4 bg-white shadow-md rounded-lg flex justify-between"
          >
            <span>{post.title}</span>
            <span className="text-gray-500 text-sm">{post.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
