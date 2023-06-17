import React, { useState } from "react";
import AddPost from "./AddPost.jsx";

const Feed = () => {
  const [dummyimages, setDummyImages] = useState([
    "https://images.pexels.com/photos/1142948/pexels-photo-1142948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://rare-gallery.com/mocahbig/69161-Merlin-TV-ShowThe-Jousting-Game.jpg",
    "https://guardian.ng/wp-content/uploads/2019/08/Cows-Photo-iStock.jpg",
    "https://i.insider.com/5cd5b42d021b4c04c7213402?width=1000&format=jpeg&auto=webp"
  ]);
  const [dummyFeed, setDummyFeed] = useState([
    "Before getting engaged I told Jeanine “Im a caveman first”. After 9 years i finally did my first solo deep caver weekend spelunk. Thanks huney for standing by me along this deep dark way.",
    "Last weekend at the regional jousting meet. This guy saw me coming from 300 feet and I STILL knocked him off his horse. SMH, Antonio is still INVICTUS baby. SO to my wife Jeanine for always being my squire. Love u baby.",
    "Today, as I strolled through a charming countryside, I stumbled upon a peculiar farm housing a group of delightfully quirky cows. These comical creatures seemed to have an uncanny knack for making me burst into fits of laughter. From their playful antics to their mischievous expressions, they had an undeniable talent for brightening even the dullest of days. Their synchronized cow-dances and goofy cow-faces created a spectacle that left me grinning from ear to ear, reminding me of the joy that can be found in the simplest of encounters."
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
