import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    // サイドバーとの幅,高さを揃えたい
    <div className="h-min bg-gray-200 px-2">
      <div className="overflow-hidden rounded-lg">
        <div className="flex">
          <div className="w-full p-3">
            <div className="relative">
              <SearchIcon className="absolute left-1 top-3 h-3/5 w-1/5 text-gray-400"></SearchIcon>
              <input
                type="text"
                className="h-14 w-full rounded-lg bg-white px-16 hover:cursor-pointer focus:outline-none"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default SearchBar;
