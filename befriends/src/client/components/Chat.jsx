import {useEffect, useState} from 'react';
import axios from "axios";
import io from "socket.io-client";

//parameters: "circle" || "direct", id for either circle or direct, current user id
//need to figure out if we have username or userId
//chat Type of 1 is friend circles, 0 is DM
function Chat({chatType, chatId, currentUser}) {
const roomId = (chatType === 1 ? 'circle' + chatId : 'direct' + chatId);
const socket = io("http://localhost:3000");
socket.emit('create', roomId);
// const socket = io();
socket.on('message', message => {
  let copy = messages.slice();
  copy.push(message);
  setMessages(copy);
})

const [text, setText] = useState('');
const [messages, setMessages] = useState([]);

const handleTextChange = (event) => {
  const { value } = event.target;
  setText(value);
};


const handleSendClick = () => {
  //insert message into db
  let messageObj = (chatType === 1 ? {
    user_id : currentUser.id,
    circle_chat_id : chatId,
    direct_chat_id : null,
    message : text,
    date : Date.now()
  } : {
    user_id : currentUser.id,
    circle_chat_id : null,
    direct_chat_id : chatId,
    message : text,
    date : Date.now()
  })
  let copy = messages.slice();
  copy.push(messageObj);
  setMessages(copy);
  messageObj.room = roomId;
  console.log('sending a message', messageObj);
  socket.emit('message', messageObj);
  setText('');
  axios.post("http://localhost:3000/messages", messageObj);
};


  //get all messages with the circle or direct id
    //ideally we would just pull the most recent 50, then load as needed, but for mvp can pull all
  //display all messages in the messages section
  //any messages where the sender is the current user get displayed on the left
  //all other messages display on the right
  //if the user sends new messages, insert a message into the db and display it.
  //socket io for the chat?


  useEffect(() => {
    axios.get(`http://localhost:3000/chats/${chatType}/${chatId}`)
      .then((results) => setMessages(results.data))
      .catch((err) => console.log('error getting messages', err));
  }, []);


if (messages.length === 0) {
  return (
    <>
      <div>No Messages Yet!</div>
      <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={text} onChange={handleTextChange}/>
      <button className="btn" onClick={handleSendClick}>Send</button>
    </>
  )} else {
    return (
      <>
        {messages.map((message, index) => {
          if (message.user_id === currentUser.id) {
            return (
              <>
                <div className="chat chat-start">
                  <div className="chat-bubble" key={index}>User: {message.message}</div>
                </div>
              </>)
          } else {
            return (
            <>
              <div className="chat chat-end">
                <div className="chat-bubble" key={index}>Other: {message.message}</div>
              </div>
            </>)
          }
        })}
        <>
          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={text} onChange={handleTextChange}/>
          <button className="btn" onClick={handleSendClick}>Send</button>
        </>
      </>
    )
  }
}

export default Chat;