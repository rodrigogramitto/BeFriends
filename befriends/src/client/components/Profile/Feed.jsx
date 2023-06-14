import React, { useState } from "react";

const Feed = () => {
  const dummyFeed = [
    "Before getting engaged I told Jeanine “Im a caveman first”. After 9 years i finally did my first solo deep caver weekend spelunk. Thanks huney for standing by me along this deep dark way.",
    "Last weekend at the regional jousting meet. This guy saw me coming from 300 feet and I STILL knocked him off his horse. SMH, Antonio is still INVICTUS baby. SO to my wife Jeanine for always being my squire. Love u baby."
  ];

  return (
    <div className="profile-feed">
      <div className="profile-feed-header">
        <h4 className="card-title">Post about your hobbies!</h4>
      </div>
      <div>
        <ul>
          {dummyFeed.map((feedEntry, key) => (
            <div className="feed-post" key={key}>
              <li>{feedEntry}</li>
              <img className="feed-image" src="https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg"></img>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Feed;
