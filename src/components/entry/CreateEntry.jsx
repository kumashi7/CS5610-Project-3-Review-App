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
      <div>
          <h1>Create Entry</h1>
          <h5>
              Title
          </h5>
          <input value={title} onChange={e => setTitle(e.target.value)} />
          <h5>
              Release
          </h5>
          <input type='number' value={release} onChange={e => setRelease(e.target.value)} />
          <h5>
              Genre
          </h5>
          <input value={genre} onChange={e => setGenre(e.target.value)} />
          <h5>
              Content
          </h5>
          <input value={content} onChange={e => setContent(e.target.value)} />
          
          <button onClick={createNewEntry}>
              Create Movie Entry
          </button>
      </div>

  )
}