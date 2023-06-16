
function CircleMessages ({userChats, setCurrentChat}) {


    return (
    <div className="flex justify-center">
        <div className="tabs flex flex-col">
        <a className="btn btn-block" >Direct Messages</a>
          {(userChats.length > 0 ? userChats.map((chat, index) => {
            return (<a className="btn btn-block" key={index} onClick={() => {
              setCurrentChat(chat.chatId);
            }}> {chat.chatName}</a>)
          }) :  <><a className="btn btn-block">Cave Divers</a>
          <a className="btn btn-block">Jousters R Us</a>
          <a className="btn btn-block">Fisherman</a></>)}
        </div>
    </div>
  )
}

export default CircleMessages;