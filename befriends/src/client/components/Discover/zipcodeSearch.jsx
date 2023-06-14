import {useState} from 'react'
const distances = [1, 5, 10, 25, 50, 100];

function ZipCodeSearch () {
    const [distance, setDistance] = useState(0);

    const handleDistanceClick = (distance) => {
        setDistance(distance)
    }

    return (
         <div className="flex flex-row m-5 justify-center">
          <p className="align-center mt-1">Show friends within</p>
          <div id="zip-dropdown" className="dropdown z-10 rounded-box">
            {distance === 0 ? 
            <label tabIndex={0} className="m-2 font-bold ">Select</label>
            : <label tabIndex={0} className="m-2 font-bold ">{distance}</label>
            }
            <ul tabIndex={0} id="dropdown-options" className="dropdown-content menu p-1 shadow rounded-box w-12">
              {distances.map((distance, i) => {
                return (<li 
                    key={i} 
                    value={distance}
                    onClick={() => handleDistanceClick(distance)}
                     ><a>{distance}</a></li>)
              })}
            </ul>
          </div>
          <p className="align-center mt-1" >miles</p>
        </div>
    )
}

export default ZipCodeSearch;