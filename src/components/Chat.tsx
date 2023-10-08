import React from "react";
import SearchBar from "./SearchBar";
import ChatBar from "./ChatBar";
const Chat = () => {
  return (
    <div className="hidden-scrollbar h-screen w-full overflow-y-scroll">
      <SearchBar/>
      {/* ここにチャットを表示するコンポーネントを作成
      最新のチャットを表示するようにスクロール */}
        <div className="m-40">aaa</div>
        <div className="m-40">aaa</div>
        <div className="m-40">aaa</div>
        <div className="m-40">aaa</div>
      <ChatBar/>
    </div>
  );
};

export default Chat;
