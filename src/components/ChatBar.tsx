import React from "react";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

const ChatBar = () => {
    return (
        <div className="h-min bg-gray-200 px-2">
      <div className="overflow-hidden rounded-lg">
        <div className="flex">
          <div className="w-full p-3">
            <div className="relative">
              <input
                type="text"
                className="h-14 w-full rounded-lg bg-white px-16 hover:cursor-pointer focus:outline-none"
              ></input>
                <SentimentSatisfiedAltIcon className="absolute right-1 top-3 h-3/5 w-1/5 text-gray-400"></SentimentSatisfiedAltIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
    }

export default ChatBar;