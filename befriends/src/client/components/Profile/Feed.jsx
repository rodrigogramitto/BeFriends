import react, { useState } from 'react';

const Feed = () => {

  const dummyFeed = ['post1', 'post2', 'post3'];

  return (
    <div>
      <h4 className="card-title">Feed</h4>
      <ul>
        {dummyFeed.map((feedEntry, key) => (<li key={key}>{feedEntry}</li>))}
      </ul>
    </div>
  )
}

export default Feed