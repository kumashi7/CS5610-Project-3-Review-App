import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import CommentItem from '../comment/CommentItem';

export default function EntryDetails(props) {
  const navigate = useNavigate();
  const location = useLocation()
  const { id } = location.state
  const [entryDetails, setEntryDetails] = useState({});

  function deleteEntry({id}) {
    Axios.delete('/entry/' + id)
        .then(response => {
            console.log("Deleted entry");
            console.log(response.data);
            navigate('/');

        })
        .catch(error => console.log(error));
  }

  useEffect(() => {
    // Retrieve entries from database
  Axios.get('/entry/' +  id)
      .then(response => {
          console.log(response.data)
          setEntryDetails(response.data)
      });
  },[]);

  if (!entryDetails) {
    return (<div>
        Loading entry details, please wait...
    </div>)
  }

  const comments = [{
    content: "hello",
    date: Date.now
  },
  {
    content: "lkjfldjfalj",
    date: Date.now
  }];

  return (
    <div key={id}>
      <h2>{entryDetails.title}</h2>
      <hr></hr>
      <h3>{entryDetails.genre}</h3><h3>{entryDetails.release}</h3>
      <div>{entryDetails.content}</div>
      <button onClick={ () => deleteEntry({id})}>delete entry</button>
      <Link to="/updateEntry" state ={{id: id}}>
        <button>update entry</button>
      </Link>
      <br></br>
      <CommentItem list={comments}/>
  </div>
  )
}