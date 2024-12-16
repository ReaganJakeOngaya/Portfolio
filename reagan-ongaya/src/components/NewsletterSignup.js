import React from "react";

const NewsletterSignup = ({id}) => {
  return (
    <div id ={id} className="my-8 py-40 bg-blue-500 text-white p-6 rounded-lg text-center min-h-screen">
      <h2 className="text-lg font-bold mb-4">Never Miss a Post!</h2>
      <p className="mb-4">Subscribe to our newsletter for the latest updates.</p>
      <form>
        <input
          type="email"
          placeholder="Your email"
          className="p-2 rounded-l-lg border-none focus:ring-2 focus:ring-blue-300"
        />
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 p-2 rounded-r-lg text-white"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterSignup;
