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
          <form action="" className="form">
              <h2>CREATE ENTRY</h2>
              <input type="text" name="text" className="box" placeholder="Enter Title" value={title} onChange={e => setTitle(e.target.value)} />
              {/* eslint-disable-next-line react/jsx-no-duplicate-props */}
              <input type="text" name="text" className="box" placeholder="Enter Release Year" type='number' value={release} onChange={e => setRelease(e.target.value)} />
              <input type="text" name="text" className="box" placeholder="Enter Genre" value={genre} onChange={e => setGenre(e.target.value)} />
              <input type="text" name="text" className="box" placeholder="Enter Content" value={content} onChange={e => setContent(e.target.value)} />
              <button type="submit" id="submit" className="box" onClick={createNewEntry}>
                  Create
              </button>
          </form>
      </div>
  )
}