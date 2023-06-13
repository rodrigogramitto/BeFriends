import {useEffect, useState} from 'react';
import axios from "axios";
// import io from 'socket.io';

//parameters: "circle" || "direct", id for either circle or direct, current user id
//need to figure out if we have username or userId
function Chat(chatType, chatId, userId) {
// const socket = io();
// socket.on('message', message => {
//   console.log(message);
// })

  //get all messages with the circle or direct id
    //ideally we would just pull the most recent 50, then load as needed, but for mvp can pull all
  //display all messages in the messages section
  //any messages where the sender is the current user get displayed on the left
  //all other messages display on the right
  //if the user sends new messages, insert a message into the db and display it.
  //socket io for the chat?

  const [messages, setMessages] = useState([]);

  const usernames = {};

  useEffect(() => {
    axios.get(`/chats/${chatType}/${chatId}`)
      .then((results) => setMessages(results))
      .catch((err) => console.log('error getting messages', err));
  }, []);

if (messages.length === 0) {
  return (
    <>
      <div>Messages will display here</div>
      <div>Text entry area for new messages goes here</div>
    </>
  )} else {
    return (
      <>
        {messages.map((message) => {
          if (message.user_id === userId) {
            console.log('user message', message.message);
          } else {
            console.log('other person message', message.message)
          }
        })}
      </>
    )
  }
}

export default Chat;