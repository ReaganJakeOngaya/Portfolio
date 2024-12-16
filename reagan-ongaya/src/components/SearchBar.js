import React, { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search query:", query);
    // Add search functionality here
  };

  return (
    <div className="p-4">
      <form
        onSubmit={handleSearch}
        className="flex items-center justify-center rounded-lg  p-4 max-w-xl mx-auto "
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search blog posts..."
          className="flex-grow p-2 shadow-lg text-gray-700 text-sm sm:text-base border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 shadow-lg text-white font-medium rounded-full hover:bg-blue-600 transition duration-200"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

