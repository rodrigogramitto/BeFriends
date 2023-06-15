import {useState} from 'react';

function FriendCard ({user}) {
    const [main, setMain] = useState(user.photos[0]);

    const handleImgClick = (photo) => {
        setMain(photo)
    }

    return (
        <div
        className='card'
        >
            <div className="flex justify-center m-5">
                <div className="flex flex-row">
                    <img style={{width: "30vw"}} src={main} alt="Friend Photo"/>
                    <div className="flex flex-col m-4">
                        <p className="text-lg font-bold" >{`${user.firstname} ${user.lastname}`}</p>
                        <p className="text-sm" >{user.location}</p>
                        <div className="friend-hobbies">
                            <p className="underline">Hobbies & Interests</p>
                            <ul>
                            {user.hobbies.map((hobby, i) => {
                                return ( <li key={i}>{`- ${hobby}`}</li>)
                            })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div id="discover-photos" className="join join-vertical lg:join-horizontal">
            {user.photos.map((photo, i) => {
                return (<img src={photo} key={i} onClick={() => handleImgClick(photo)}/>)
            })}
            </div>
        </div>
    )
}

export default FriendCard