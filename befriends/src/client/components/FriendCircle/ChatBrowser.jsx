import Browser from "./Browser.jsx";

const ChatBrowser = () => {


  return (
    <div>
        <div className="tabs flex justify-center">
            <a className="tab tab-lifted tab-active">Browser</a> 
            <a className="tab tab-lifted">Chat</a> 
        </div>
        <div>
            <Browser />
        </div>
    </div>
  )
}

export default ChatBrowser