import {useEffect, useState} from 'react';
import axios from "axios";

//parameters: "circle" || "direct", id for either circle or direct, current user id
function Chat(chatType, chatId, userId) {

  //get all messages with the circle or direct id
    //ideally we would just pull the most recent 50, then load as needed, but for mvp can pull all
  //display all messages in the messages section
  //any messages where the sender is the current user get displayed on the left
  //all other messages display on the right
  //if the user sends new messages, insert a message into the db and display it.
  //socket io for the chat?

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get(`/chats/${chatType}/${chatId}`)
      .then((results) => setMessages(results))
      .catch((err) => console.log('error getting messages', err));
  }, []);

  return (
    <>
      <div>Messages will display here</div>
      <div>Text entry area for new messages goes here</div>
    </>
  );
}

export default Chat;