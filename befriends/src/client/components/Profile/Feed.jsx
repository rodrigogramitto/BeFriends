import React, { useState } from "react";
import AddPost from "./AddPost.jsx";

const Feed = () => {
  const [dummyimages, setDummyImages] = useState([
    "https://images.pexels.com/photos/1142948/pexels-photo-1142948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://rare-gallery.com/mocahbig/69161-Merlin-TV-ShowThe-Jousting-Game.jpg",
    "https://guardian.ng/wp-content/uploads/2019/08/Cows-Photo-iStock.jpg"
  ]);
  const [dummyFeed, setDummyFeed] = useState([
    "Before getting engaged I told Jeanine “Im a caveman first”. After 9 years i finally did my first solo deep caver weekend spelunk. Thanks huney for standing by me along this deep dark way.",
    "Last weekend at the regional jousting meet. This guy saw me coming from 300 feet and I STILL knocked him off his horse. SMH, Antonio is still INVICTUS baby. SO to my wife Jeanine for always being my squire. Love u baby.",
  ]);

  return (
    <div className="profile-feed">
      <div className="profile-feed-header">
        <div className="profile-feed-header2">
        <h1 className="text-2xl mt-2">Post about your hobbies!</h1>
        <AddPost dummyFeed={dummyFeed} setDummyFeed={setDummyFeed} dummyimages={dummyimages} setDummyImages={setDummyImages} />
        </div>
        </div>
      <div>
        <ul>
          {dummyFeed.map((feedEntry, index) => (
            <div className="feed-post" key={index}>
              <li>{feedEntry}</li>
              <img
                className="feed-image"
                src={dummyimages[index]}
                alt="Post Image"
              ></img>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Feed;
