import React, { useState, useEffect } from 'react'

import './EntryCard.css'
import CreateEntry from './CreateEntry'

// Entry card item
function EntryCard({list}) {
  const [edit, setEdit] = useState ({
    id: null,
    value: ''
  })

  // useEffect(() => {
  //   console.log(list);
  // },[]);

  return list.map(({title, genre, release, content, reviews, _id}) => 
    <div key={_id} className='container'>
      <h2>{title}</h2>
      <hr></hr>
      <h3>{genre}</h3><h3>{release}</h3>
      <div>
        <button className='delete-button'>Delete</button>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default EntryCard