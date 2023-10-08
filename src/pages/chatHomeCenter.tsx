import React from "react";

export default function chatHomeCenter() {
  return (
    <div className="py-20 h-screen bg-gray-300 px-2">
      <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
        <div className="md:flex">
          <div className="w-full p-3">
            <div className="relative">
              <i className="absolute fa fa-search text-gray-400 top-5 left-4"></i>
              <input
                type="text"
                className="bg-white h-14 w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer"
                name=""
              ></input>
              <span className="absolute top-4 right-5 border-l pl-4">
                <i className="fa fa-microphone text-gray-500 hover:text-green-500 hover:cursor-pointer"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
