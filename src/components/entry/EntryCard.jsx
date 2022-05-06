import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import './Entry.css'

// Entry card item
function EntryCard({list}) {

  return list.map(({title, genre, release, content, _id}) => 
  <Link to="/entryDetails" state ={{id: _id}}>
    <div key={_id} className="entry">
      <h2>{title}</h2>
      <hr></hr>
      <h3>{genre}</h3><h3>{release}</h3>
      <div>{content}</div>
    </div>
  </Link>
  );
}

export default EntryCard