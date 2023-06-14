import React, { useState, useMemo, useRef } from 'react'
import TinderCard from 'react-tinder-card'
import FriendCard from './friendCard'
import ZipCodeSearch from './zipcodeSearch'


const db = [
    {
      name: 'Richard Hendricks, 32',
      location: 'Austin, Texas',
      hobbies: ['Hackathons', 'Tech podcasts', 'Reading', 'Nature walks'],
      photos: [
        'https://www.paloaltoonline.com/news/photos/2014/april/22/35101_original.jpg',
        'https://res.cloudinary.com/devex/image/fetch/c_scale,f_auto,q_auto,w_720/https://lh4.googleusercontent.com/VQyrPPyh-FGdV2BJtlcwDphesnxERD6SLWvGtARygLDVNSsXhFF0kzG_yXvLyiARZbKIG3VYF_CIbF4_B-Wy3Eu7kKhHKKR3pq_2ob2pdZgxt_Wz_uqXjRMrhIBKREQnJo--Ui9b',
        'https://www.mercurynews.com/wp-content/uploads/2019/12/silicon1.jpg?w=525',
        'https://st.focusedcollection.com/14026668/i/1800/focused_172096106-stock-photo-man-reading-book.jpg'
      ]

    },
    {
      name: 'Erlich Bachman, 28',
      location: 'Houston, Texas',
      hobbies: ['Meditation', 'Home brewing', 'Comedy', 'Watching movies'],
      photos: [
        'https://hbomax-images.warnermediacdn.com/images/GVw1ceAvTe8MEvJYJAAAD/tile?size=1280x720&format=jpeg&partner=hbocom&v=3da0884c906b6b370670c575d5ff568a&host=art-gallery.api.hbo.com',
        'https://media.vanityfair.com/photos/5927441c814bb30a78008148/master/w_2560%2Cc_limit/Erlich-Bachman-TJ-Miller.jpg',
        'https://www.westend61.de/images/0000043187pw/man-planting-tree-close-up-LDF00503.jpg',
        'https://www.indiewire.com/wp-content/uploads/2018/03/silicon-valley-tj-miller-season-4-episode-4-jimmy-o-yang.jpg',
      ]
    },
    {
      name: 'Monica Hall, 30',
      location: 'El Paso, Texas',
      hobbies: ['Work', 'Wine tasting', 'Yoga', 'Art collecting'],
      photos: [
        'https://i.ytimg.com/vi/UEQmHvqcAug/maxresdefault.jpg',
        'https://assets.editorial.aetnd.com/uploads/2019/06/yoga-gettyimages-1142820079.jpg',
        'https://directconversations.com/wp-content/uploads/2016/05/Amanda-Crew-in-Silicon-Valley-2.jpg',
        'https://mountaintoplodge.com/wp-content/uploads/2018/09/wine-tasting.jpg'
      ]
    },
    {
      name: 'Jared Dunn, 24',
      location: 'San Antonio, Texas',
      hobbies: ['Volunteering', 'Reading', 'Bird watching', 'Journaling'],
      photos: [
        'https://www.washingtonpost.com/wp-apps/imrs.php?src=http://www.washingtonpost.com/news/act-four/wp-content/uploads/sites/25/2018/04/Jared-Silicon-Valley.jpg&w=1440',
        'https://www.birdspot.co.uk/wp-content/uploads/2021/10/man-bird-watching.jpg',
        'https://assets3.thrillist.com/v1/image/1732420/1000x666/flatten;crop;webp=auto;jpeg_quality=60.jpg',
        'https://media.istockphoto.com/id/457207765/photo/man-sitting-on-sofa-reading-book.jpg?s=612x612&w=0&k=20&c=TRZRBjFst18CckczwzuX1BEfqY3qIDVlfEQuhUq1kcM='
      ]
    },
    {
      name: 'Dinesh Chugtai, 35',
      location: 'Dallas, Texas',
      hobbies: ['Playing guitar', 'Video games', 'Thrift shopping', 'Indie music'],
      photos: [
        'https://www.indiewire.com/wp-content/uploads/2021/10/Kumail-Nanjiani.jpg',
        'https://online.berklee.edu/takenote/wp-content/uploads/2021/01/acoustic_guitar_techniques_article_image_2021.jpg',
        'https://bestlifeonline.com/wp-content/uploads/sites/3/2017/08/man-reading-book-with-coffee-e1559851725982.jpg?quality=82&strip=all',
        'https://media.cnn.com/api/v1/images/stellar/prod/210104133055-beginner-gaming-pc.jpg?q=x_0,y_0,h_900,w_1599,c_fill/h_720,w_1280'
      ]
    }
  ]



function DiscoverMode ({user, currentUser}) {
    const [currentIndex, setCurrentIndex] = useState(db.length - 1)
    const [lastDirection, setLastDirection] = useState()
    // used for outOfFrame closure
    const currentIndexRef = useRef(currentIndex)
  
    const childRefs = useMemo(
      () =>
        Array(db.length)
          .fill(0)
          .map((i) => React.createRef()),
      []
    )
  
    const updateCurrentIndex = (val) => {
      setCurrentIndex(val)
      currentIndexRef.current = val
    }
  
    const canGoBack = currentIndex < db.length - 1
  
    const canSwipe = currentIndex >= 0
  
    // set last direction and decrease current index
    const swiped = (direction, nameToDelete, index) => {
      setLastDirection(direction)
      updateCurrentIndex(index - 1)
    }
  
    const outOfFrame = (name, idx) => {
      console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)

      currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    }
  
    const swipe = async (dir) => {
      if (canSwipe && currentIndex < db.length) {
        await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
      }
    }
  
    // increase current index and show card
    const goBack = async () => {
      if (!canGoBack) return
      const newIndex = currentIndex + 1
      updateCurrentIndex(newIndex)
      await childRefs[newIndex].current.restoreCard()
    }

    const handleSwipeRight = (modal) => {
      swipe('right');
      modal.showModal()
    }
  
    return (
    <div className="flex justify-center">
      <div>
        <h1 className="flex justify-center m-4">Discover Friends</h1>
        <ZipCodeSearch />
        <div className='cardContainer'>
          {db.map((character, index) => (
            <TinderCard
            ref={childRefs[index]}
            className='swipe'
            key={character.name}
            onSwipe={(dir) => swiped(dir, character.name, index)}
            onCardLeftScreen={() => outOfFrame(character.name, index)}
            >
                <FriendCard character={character} />
            </TinderCard>
          ))}
        </div>
        <div className='buttons'>
          <button style={{ backgroundColor: !canSwipe && '#c3c4d3', width: "50px" }} onClick={() => swipe('left')}>X</button>
          <button style={{ backgroundColor: !canGoBack && '#c3c4d3', width: "65px" }} onClick={() => goBack()}>Undo</button>
          <button style={{ backgroundColor: !canSwipe && '#c3c4d3', width: "50px" }} onClick={() => handleSwipeRight(modal)}>✓</button>
        </div>
        <dialog id="modal" className="modal">
          <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg">Friend Status</h3>
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

export default DiscoverMode;