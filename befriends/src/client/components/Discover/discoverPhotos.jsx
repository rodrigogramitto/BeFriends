
function Photos ({friend1}) {
    return (
        <div className="outer-discover-photos">
        <div id="discover-photos" className="join join-vertical lg:join-horizontal">
            {friend1.photos.map((photo, i) => {
                return (<img src={photo} key={i}/>)
            })}
        </div>
        </div>
    )
}

export default Photos;