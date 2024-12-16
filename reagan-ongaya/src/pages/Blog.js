import React from "react";
import BlogHeader from "../components/BlogHeader";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import FeaturedPosts from "../components/FeaturedPosts";
import RecentPosts from "../components/RecentPosts";
import NewsletterSignup from "../components/NewsletterSignup";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <BlogHeader  id="intro"/>
      <div className="container mx-auto px-4 md:px-8">
        {/* Sticky SearchBar */}
      <div className="sticky top-[40px] z-40 ">
        <SearchBar />
      </div>
        <Categories  id="categories"/>
        <FeaturedPosts id="featuredposts" />
        <RecentPosts  id="recentposts"/>
        <NewsletterSignup id="newsletter"/>
      </div>
    </div>
  );
};

export default Blog;
