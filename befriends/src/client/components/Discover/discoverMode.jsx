import FriendInfo from "./friendInfoCard"
import Carousel from "./discoverCarousel";
import DiscoverButtons from "./discoverButtons";

function DiscoverMode () {

    const friend1 = {
        name: "Jeremy Smith",
        age: "24",
        location: "Austin, Tx",
        hobbies: ["Horseback Riding", "Watching movies", "Painting", "Soccer"],
        profilePhoto: "https://media.gettyimages.com/id/813935198/photo/smiling-man-in-the-living-room-is-taking-a-selfie.jpg?s=1024x1024&w=gi&k=20&c=5Ap2RS43vCIbCjZOw_IE65st74MWnCbPCxw4FRe7H7A="
    }

    return (
        <div className="flex justify-center ...">
            <div className="flex flex-col">
                <h2 className="text-4xl flex justify-center ..." >DiscoverMode</h2>
                <div className="discover flex flex-row items-start justify-center gap-10" >
                    <FriendInfo friend1={friend1} />   
                    <img className="photo" src={friend1.profilePhoto}/>    
                </div>
                <Carousel />
                <DiscoverButtons />
            </div>
        </div>
    )
}

export default DiscoverMode