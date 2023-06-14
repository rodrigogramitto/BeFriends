import {useEffect, useState} from 'react';
import axios from "axios";
import io from "socket.io-client";

//parameters: "circle" || "direct", id for either circle or direct, current user id
//need to figure out if we have username or userId
function Chat({chatType, chatId, userId}) {

const socket = io("http://localhost:3000");
// const socket = io();
socket.on('message', message => {
  // console.log('message from server', message);
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
  let messageObj = {
    user_id : userId,
    message: text,
  };
  let copy = messages.slice();
  copy.push(messageObj);
  setMessages(copy);
  // console.log('sending a message', messageObj);
  socket.emit('message', messageObj);
  setText('');
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
      <div>Messages will display here</div>
      <div>Text entry area for new messages goes here</div>
    </>
  )} else {
    return (
      <>
        {messages.map((message, index) => {
          if (message.user_id === userId) {
            return (<div key={index}>user message: {message.message}</div>)
          } else {
            return (<div key={index}>other person message: {message.message}</div>)
          }
        })}
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={text} onChange={handleTextChange}/>
        <button className="btn" onClick={handleSendClick}>Submit which does not submit yet</button>
      </>
    )
  }
}

export default Chat;