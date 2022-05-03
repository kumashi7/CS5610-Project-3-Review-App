import React from 'react'
import './Review.css'
import Axios from 'axios';


function deleteReview(pair) {
  console.log("entryid + reviewId");
  console.log(pair.entryId);
  console.log(pair.reviewId);
  const entryid = pair.entryId;
  const reviewid = pair.reviewId;
  Axios.delete('/entry/' + entryid + '/' + reviewid)
      .then(response => {
          console.log("Deleted review");
          console.log(response.data);
      })
      .catch(error => console.log(error));
}

function ReviewItem(props) {
  let entryId = props.entryId;
  return props.list.map(({content, date, _id}) => 
    <div>
      <p>{date}</p>
      <h6>{content}</h6>
      <button onClick={() => deleteReview({entryId: entryId, reviewId: _id})}>delete review</button>
      <hr></hr>
    </div>
  );
}

export default ReviewItem 