
function CircleMessages ({userChats, setCurrentChat}) {


    return (
    <div className="flex justify-center">
        <div className="tabs flex flex-col">
        <a className="tab" >Direct Messages</a>
          {(userChats.length > 0 ? userChats.map((chat, index) => {
            return (<a className="tab" key={index} onClick={() => {
              setCurrentChat(chat.chatId);
            }}> {chat.chatName}</a>)
          }) :  <><a className="tab">Cave Divers</a>
          <a className="tab">Jousters R Us</a>
          <a className="tab">Fisherman</a></>)}
        </div>
    </div>
  )
}

export default CircleMessages;