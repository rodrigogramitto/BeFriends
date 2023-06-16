import Browser from "./Browser.jsx";
import Chat from "../Chat.jsx"
import { useState, useEffect } from 'react';

const ChatBrowser = ({userChats, setUserChats, currentUser, currentChat}) => {


  const views = {
    0: <Browser userChats={userChats} setUserChats={setUserChats} currentUser={currentUser} />,
    1: (currentChat > 0 ? <Chat chatType={1} chatId={currentChat} currentUser={currentUser}/>
     : <div className="flex justify-center mt-5">
      No Chats Yet 😔 Click on a FriendCircle to get started!
     </div>),
  }
  const [currentView, setCurrentView] = useState(0);

  return (
    <div>
        <div className="tabs flex justify-center">
            <a className="tab tab-bordered tab-lg" onClick={()=>setCurrentView(0)}>Browser</a>
            <a className="tab tab-bordered tab-lg" onClick={()=>setCurrentView(1)}>Chat</a>
        </div>
        <div>
            {views[currentView]}
        </div>
    </div>
  )
}

export default ChatBrowser

