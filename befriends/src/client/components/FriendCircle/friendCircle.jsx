import CircleMessages from "./circleMessages";
import ChatBrowser from "./ChatBrowser";
import MyCalendar from "../Calendar.jsx";
import {useEffect, useState} from 'react';
import axios from 'axios';

function FriendCircle ({currentUser}) {

  const [userChats, setUserChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:3000/chats/${currentUser.id}`)
        .then((chats) => {
            setUserChats(chats.data);
            if (chats.length> 0) {
                setCurrentChat(chats[0].chatId);
            }
        })
  }, []);

  return (
    <div className="flex justify-center flex-col" id="friend-circle-container" >
        <h1 className="flex justify-center m-4">FriendCircles™</h1>
        <div className="flex flex-row gap-5 ml-20" id="fc-sub-container">
            <div className="flex flex-col" id="fc-calendar-messages">
                <div id="fc-calendar" >
                    <MyCalendar/>
                </div>
                <div id="fc-circle-messages">
                    <CircleMessages userChats={userChats} setCurrentChat={setCurrentChat} currentChat={currentChat} />
                </div>
            </div>
            <div id="fc-browser-container" >
                <ChatBrowser userChats={userChats} setUserChats={setUserChats} currentUser={currentUser} currentChat={currentChat}/>
            </div>
        </div>
   </div>

    )
}

export default FriendCircle;

