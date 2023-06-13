import FriendInfo from "./friendInfoCard"
import Photos from "./discoverPhotos";
import DiscoverButtons from "./discoverButtons";

function DiscoverMode () {
    const friend1 = {
        name: "Jeremy Smith",
        age: "24",
        location: "Austin, Tx",
        hobbies: ["Horseback Riding", "Watching movies", "Painting", "Soccer"],
        photos: [
            "https://media.gettyimages.com/id/813935198/photo/smiling-man-in-the-living-room-is-taking-a-selfie.jpg?s=1024x1024&w=gi&k=20&c=5Ap2RS43vCIbCjZOw_IE65st74MWnCbPCxw4FRe7H7A=",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmu8MLteYuAkpEDtsroos5QAOCgOqrKUpkKg&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDTWYA3QB91WGU0IcFT8bcwDoVFIHF_Vts3w&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzYfHaDvWNjpRvaAfux5M1yqPCIUuU-kEOjw&usqp=CAU",
            "https://www.raisingedmonton.com/wp-content/uploads/2020/06/Depositphotos_175956732_l-2015.jpg"
        ]
    }


    return (
        <div className="flex justify-center">
            <div className="discover-card">
                <div className="card w-100 bg-base-100 shadow-xl flex justify-center ...">
                    <div className="card-body items-center text-center flex flex-col">
                        <h2 className="card-title text-4xl">DiscoverMode</h2>
                        <div className="discover flex flex-row items-start justify-center gap-10" >
                            <FriendInfo friend1={friend1} />   
                            <img className="photo" src={friend1.photos[0]}/>    
                        </div>
                        <Photos friend1={friend1}/>
                        <DiscoverButtons />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiscoverMode
