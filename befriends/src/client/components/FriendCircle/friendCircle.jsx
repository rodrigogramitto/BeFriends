import CircleMessages from "./circleMessages";
import ChatBrowser from "./ChatBrowser";
import MyCalendar from "../Calendar.jsx"

function FriendCircle ({currentUser}) {

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
                height: "400px",
                width: "400px",
                overflow: "auto",
                }}>
                <MyCalendar/>
                </div>
                <div style={{
                border: "1px solid blue",
                height: "300px",
                width: "400px",
                }}>
                <CircleMessages />
                </div>
            </div>
            <div style={{
                border: "1px solid red",
                height: "600px",
                width: "800px",
                }}>
                <ChatBrowser currentUser={currentUser}/>
            </div>
        </div>
   </div>

    )
}

export default FriendCircle;