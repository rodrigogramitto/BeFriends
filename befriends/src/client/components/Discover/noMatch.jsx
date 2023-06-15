import ZipCodeSearch from "./zipcodeSearch";

function NoMatch ({distance, setDistance}) {
    return (
        <div className="flex justify-center flex-col">
            <h1 className="flex justify-center m-4">Discover Friends</h1>
            <ZipCodeSearch distance={distance} setDistance={setDistance}/>
            <div className="flex justify-center">
            <div className='card flex justify-center'>
                <div className="flex m-5 flex-col">
                    <h2 className="text-4xl ml-20">Could not find friends near you 😔</h2>
                    <h2 className="text-4xl ml-20">try increasing the miles above</h2>
                </div>
            </div>
        </div>
        </div>
    )
}

export default NoMatch;