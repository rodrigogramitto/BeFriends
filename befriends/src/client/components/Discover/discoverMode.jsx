import React, { useState, useMemo, useRef, useEffect } from 'react';
import axios from 'axios';
import TinderCard from 'react-tinder-card';
import FriendCard from './friendCard';
import ZipCodeSearch from './zipcodeSearch';


function DiscoverMode ({currentUser}) {
    const [users, setUsers] = useState('')
    const [currentIndex, setCurrentIndex] = useState(users.length - 1);
    const [lastDirection, setLastDirection] = useState();
    const [areTheyFriends, setAreTheyFriends] = useState(false);
    const modalRef = useRef(null);

    useEffect(() => {
      axios.get(`http://localhost:3000/discoverInfo/${currentUser.id}`)
        .then((response) => {
          const allUsers = response.data;
          const promises = allUsers.map((user) => areFriends(user.id));
          Promise.all(promises).then((results) => {
            const notFriendsYet = allUsers.filter((_, index) => !results[index]);
            setUsers(notFriendsYet);
            setCurrentIndex(notFriendsYet.length - 1);
          });
        })
        .catch((err) => console.error(err))
    }, [])

    // used for outOfFrame closure

    const childRefs = users.length > 0 ? users.map(() => React.createRef()) : '';

    const canGoBack = currentIndex < users.length - 1

    const canSwipe = currentIndex >= 0

    // set last direction and decrease current index
    const swiped = (direction) => {
      setLastDirection(direction)
      setCurrentIndex(prevIndex => prevIndex - 1)
    }

    const outOfFrame = (name, idx) => {
      console.log(`${name} (${idx}) left the screen!`, currentIndex)

      currentIndex >= idx && childRefs[idx].current.restoreCard()
    }

    const swipe = async (dir) => {
      if (canSwipe && currentIndex < users.length) {
        await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
      }
    }

    const deleteFriend = () => {
      axios.delete(`http://localhost:3000/friends/${currentUser.id}/${users[currentIndex + 1].id}`)
      .then(() => console.log('friend removed'))
      .catch((err) => console.error(err))
    }

    // increase current index and show card
    const goBack = async () => {
      if (!canGoBack) return
      const newIndex = currentIndex + 1
      setCurrentIndex(newIndex)
      deleteFriend()
      await childRefs[newIndex].current.restoreCard()
    }

    const addFriend = async () => {
      try {
        const response = await axios.post(`http://localhost:3000/friends/${currentUser.id}`, {
          friend_user_id: users[currentIndex].id
        })

        return "Friend Added!";
      } catch (err) {
        return console.error(err);
      }
    }

    const areFriends = async (friendId) => {
      try {
        const response = await axios.get(`http://localhost:3000/friends/${currentUser.id}/${friendId}`);

        setAreTheyFriends(response.data);
      } catch (err) {
        return console.error(err);
      }
    }

    const handleSwipeRight = () => {
      addFriend(childRefs[currentIndex])
        .then(() => {
          areFriends(users[currentIndex].id);
          swipe('right');
          modalRef.current.showModal()
        })
        .catch((err) => console.error(err));
    }

    if (users.length === 0) {
      return (<div>Loading</div>)
    } else {
    return (
    <div className="flex justify-center">
      <div>
        <h1 className="flex justify-center m-4">Discover Friends</h1>
        <ZipCodeSearch />
        <div className='cardContainer'>
          {users.map((user, index) => (
            <TinderCard
            ref={childRefs[index]}
            className='swipe'
            key={index}
            onSwipe={(dir) => swiped(dir, user.firstname, index)}
            onCardLeftScreen={() => outOfFrame(user.firstname, index)}
            >
                <FriendCard user={user} />
            </TinderCard>
          ))}
        </div>
        <div className='buttons'>
          <button style={{ backgroundColor: !canSwipe && '#c3c4d3', width: "50px" }} onClick={() => swipe('left')}>X</button>
          <button style={{ backgroundColor: !canGoBack && '#c3c4d3', width: "65px" }} onClick={() => goBack()}>Undo</button>
          <button style={{ backgroundColor: !canSwipe && '#c3c4d3', width: "50px" }} onClick={() => handleSwipeRight(modal)}>✓</button>
        </div>
        <dialog ref={modalRef} id="modal" className="modal">
          <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg">Friend Status</h3>
            {areTheyFriends ? <p>New friend match! Go to FriendCircles to start talking to your friend</p> : <p>Waiting for a match, continue searching for friends</p>}
            <p className="py-4">Press ESC key or click the button below to close</p>
            <div className="modal-action">
              <button className="btn">Close</button>
            </div>
          </form>
        </dialog>
        {lastDirection ? (
          <h2 key={lastDirection} className='infoText'>
            You swiped {lastDirection}
          </h2>
        ) : (
          <h2 className='infoText'>
            Swipe a card or press a button!
          </h2>
        )}
      </div>
      </div>
    )
  }
}

export default DiscoverMode;