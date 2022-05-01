import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Axios from 'axios';
import { useNavigate, useParams } from 'react-router';

export default function EntryDetailsPage(props) {
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

  return (
    <div key={entryDetails._id} className='container'>
      <h2>{entryDetails.title}</h2>
      <hr></hr>
      <h3>{entryDetails.genre}</h3><h3>{entryDetails.release}</h3>
      <div>{entryDetails.content}</div>
      <button onClick={ () => deleteEntry({id})}>delete entry</button>
      {/* <button onClick={ () => updateEntry({id})}>update entry</button> */}
      <button>update entry</button>
  </div>
  )
}