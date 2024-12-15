import React, { useState } from "react";

const ChatbotButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className=" z-50" >
      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-16 right-4 bg-white w-80 h-96 rounded-lg shadow-lg border border-gray-200 flex flex-col z-50 ">
          <div className="bg-blue-600 text-white px-4 py-2 rounded-t-lg flex justify-between items-center">
            <span className="font-bold">Chat Assistant</span>
            <button
              onClick={toggleChat}
              className="text-white font-bold focus:outline-none"
            >
              ✕
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            {/* Chat content goes here */}
            <p className="text-gray-600 text-sm">How can I assist you today?</p>
          </div>
          <div className="p-4 border-t border-gray-200">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
            <div className=" py-2">
              <button
                  type="submit"
                  className=" px-2 py-1 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition duration-300"
              >
                 Send 
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-8 right-4 bg-blue-600 text-white p-4 rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 z-50 "
      >
        💬
      </button>
    </div>
  );
};

export default ChatbotButton;
