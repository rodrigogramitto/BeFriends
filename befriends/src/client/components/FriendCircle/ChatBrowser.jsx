import Browser from "./Browser.jsx";
import Chat from "../Chat.jsx"
import { useState, useEffect } from 'react';

const ChatBrowser = ({userChats, setUserChats, currentUser, currentChat}) => {


  const views = {
    0: <Browser userChats={userChats} setUserChats={setUserChats} currentUser={currentUser} />,
    1: (currentChat > 0 ? <Chat chatType={1} chatId={currentChat} currentUser={currentUser}/> : <>No Chats Yet</>),
  }
  const [currentView, setCurrentView] = useState(0);

  const [browserTabState, setBrowserTabState] = useState("tab-active");
  const [chatTabState, setChatTabState] = useState(null);

  const browserTabClick = () => {
    setCurrentView(0);
    setBrowserTabState("tab-active");
    setChatTabState(null);
  }

  const chatTabClick = () => {
    setCurrentView(1)
    setBrowserTabState(null);
    setChatTabState("tab-active");
  }

  return (
    <div>
        <div className="tabs flex justify-center">
            <a className={`tab tab-bordered tab-lg ${browserTabState}`} onClick={browserTabClick}>Browser</a>
            <a className={`tab tab-bordered tab-lg ${chatTabState}`} onClick={chatTabClick}>Chat</a>
        </div>
        <div>
            {views[currentView]}
        </div>
    </div>
  )
}

export default ChatBrowser

