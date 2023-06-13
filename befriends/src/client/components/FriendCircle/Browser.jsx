import { useState } from 'react';

const Browser = () => {
  const friendCircles = ["Horses", "Painting", "Soccer", "Basketball", "Puzzles", "Video Games"];
  
  const [searchCircles, setSearchCircles] = useState(friendCircles);

  const handleChange = (e) => {
    var value = e.target.value.toLowerCase();
    var searchValues = searchCircles.filter((circle) => {
        return circle.toLowerCase().indexOf(value) > -1;
    })
    if (value.length === 0) {
        setSearchCircles(friendCircles)
    } else {
        setSearchCircles(searchValues);
    }
  }

  return (
    <div className="flex flex-col">
        <div>
        <input type="text" placeholder="Search" onChange={(e)=>handleChange(e)} className="input input-bordered w-full max-w-xs" /> 
        </div>   
        <div>
          {searchCircles.map((circle, i) => {
               return ( <button key={i} className="btn btn-outline">{circle}</button>)
                 })}         
        </div>
    </div>
  )
}

export default Browser