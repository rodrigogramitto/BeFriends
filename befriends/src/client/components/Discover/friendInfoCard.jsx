
function FriendInfo ({ friend1 }) {
    return (
        <div id="discover-info-card" className="card w-96 text-primary-content">
        <div className="card-body">
            <h3 className="card-title">{`${friend1.name}, ${friend1.age}`}</h3>
            <p className="zip-code text-sm">{friend1.location}</p>
            <p className="hobbies underline">Hobbies & Interests</p>
            <ul className="list-disc">
            {friend1.hobbies.map((hobby, i) => {
                return ( <li key={i}>{hobby}</li>)
            })}
            </ul>
        </div>
    </div>
    )
}

export default FriendInfo