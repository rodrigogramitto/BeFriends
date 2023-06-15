
function FriendStatusModal ({modalRef, areTheyFriends, currentUser, currentFriend}) {
    console.log('currentUser: ', currentUser)
    return (
        <dialog ref={modalRef} id="modal" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg underline">Friend Status</h3>
          {areTheyFriends 
            ? ( <div className="flex flex-col">
                <p>New friend match! Go to FriendCircles to start talking to your friend</p> 
                <div className="flex flex-row">
                    <div style={{width: "50%", height: "50%", objectFit: "contain", display: "flex", justifyContent: "center"}}>
                    <img src={currentUser.profile_pic}/>
                    </div>
                    <div className="text-5xl mr-10">🤝</div>
                    <div style={{width: "50%", height: "50%", objectFit: "contain"}}>
                    <img src={currentFriend.profile_pic}/>
                    </div>
                </div>
                </div>
                )
            : <p className="text-xl font-bold mt-2">Waiting for a match, continue searching for friends</p>}
          <p className="py-4 text-sm">Press ESC key or click the button below to close</p>
          <div className="modal-action">
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    )
}

export default FriendStatusModal