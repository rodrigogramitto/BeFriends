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
    <div className="flex justify-center" style={{height: "90%"}}>
        <div className="flex flex-row gap-5" style={{
            height: "80vh",
            width: "90%",
            }}>
            <div className="flex flex-col">
                <div style={{
                border: "1px solid blue",
                height: "600px",
                width: "600px",
                overflow: "auto",
                }}>
                <MyCalendar/>
                </div>
                <div style={{
                border: "1px solid blue",
                height: "300px",
                width: "400px",
                }}>
                <CircleMessages userChats={userChats} setCurrentChat={setCurrentChat} currentChat={currentChat} />
                </div>
            </div>
            <div style={{
                border: "1px solid red",
                height: "600px",
                width: "800px",
                }}>
                <ChatBrowser currentUser={currentUser} currentChat={currentChat}/>
            </div>
        </div>
   </div>

    )
}

export default FriendCircle;