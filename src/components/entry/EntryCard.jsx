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
      <div className="entryYearGenre">
        <h4>{release}</h4>
        <h4>{genre}</h4>
      </div>
      <div>{content}</div>
    </div>
  </Link>
  );
}

export default EntryCard