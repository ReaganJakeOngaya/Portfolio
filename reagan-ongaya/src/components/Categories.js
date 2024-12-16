import React from "react";

const Categories = ({id}) => {
  const categories = ["Web Development", "Tutorials", "Projects", "Tips"];

  return (
    <div id ={id} className="mt-4 pt-20 items-center justify-center ">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <div className="flex flex-wrap gap-2">
        {categories.map((category, index) => (
          <span
            key={index}
            className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm cursor-pointer hover:bg-blue-600"
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Categories;
