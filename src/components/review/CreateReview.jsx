import React, { useState } from 'react'
import Axios from 'axios';


export default function CreateComment({entryId}) {
  const [content, setContent] = useState('');

  function createReview() {
    Axios.post('/entry/' + entryId + '/review/', {content})
        .then(response => {
            console.log("------------- review added -------------");
            console.log(response.data);
            window.location.reload();
        })
        .catch(error => console.log(error));
  }

  return (
    <div>
        <input placeholder='Leave a Review here...' onChange={e => setContent(e.target.value)}></input>
        <br></br><br></br>
        <button onClick={createReview}>Add Review</button>
    </div>
  )
}

