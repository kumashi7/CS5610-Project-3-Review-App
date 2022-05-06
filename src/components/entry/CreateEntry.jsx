import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router';

export default function CreateEntry(props) {
  
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [release, setRelease] = useState('');
  const [genre, setGenre] = useState('');
  const [content, setContent] = useState('');

  function createNewEntry() {
      Axios.post('/entry/create', {title, release, genre, content})
          .then(response => {
              console.log("Created entry");
              console.log(response.data);
              navigate('/');
          })
          .catch(error => console.log(error));
  }

  return (
      <div className="container-entry">
          <div action="" className="form">
              <h2>CREATE ENTRY</h2>
              <input type="text" className="box" placeholder="Enter Title" onChange={e => setTitle(e.target.value)} />
              {/* eslint-disable-next-line react/jsx-no-duplicate-props */}
              <input className="box" placeholder="Enter Release Year" type='number' onChange={e => setRelease(e.target.value)} />
              <input type="text" className="box" placeholder="Enter Genre" onChange={e => setGenre(e.target.value)} />
              <input type="text" className="box" placeholder="Enter Content" onChange={e => setContent(e.target.value)} />
              <button id="submit" className="box" onClick={createNewEntry}>
                  Create
              </button>
          </div>
      </div>
  )
}