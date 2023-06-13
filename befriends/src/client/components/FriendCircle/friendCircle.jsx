import CircleMessages from "./circleMessages";
import ChatBrowser from "./ChatBrowser";

function FriendCircle () {
    
  return (
    <div className="flex justify-center" style={{height: "90%"}}>
        <div className="flex flex-row gap-5" style={{
            border: "1px solid black", 
            height: "80vh", 
            width: "90%", 
            }}>
            <div className="flex flex-col">
                <div style={{
                border: "1px solid blue", 
                height: "250px", 
                width: "250px", 
                }}>
                </div>
                <div style={{
                border: "1px solid blue", 
                height: "300px", 
                width: "250px", 
                }}>
                <CircleMessages />
                </div>
            </div>
            <div style={{
                border: "1px solid red", 
                height: "600px", 
                width: "800px", 
                }}>
                <ChatBrowser/>
            </div>
        </div>
   </div>

    )
}

export default FriendCircle;