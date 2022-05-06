import React, { useState, useEffect } from "react";
import "./Review.css";
import Axios from "axios";

function deleteReview(pair) {
  console.log("entryid + reviewId");
  const entryid = pair.entryId;
  const reviewid = pair.reviewId;
  Axios.delete("/entry/" + entryid + "/" + reviewid)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => console.log(error));
}

function ReviewItem(props) {
  const [visitUser, setVisitUser] = useState("");
  // check if user can edit or delete
  useEffect(() => {
    Axios.get("/user/userId/").then((response) => {
      console.log("current user: " + response.data.id);
      const currentUser = response.data.id;
      setVisitUser(currentUser);
    });
  }, []);

  let entryId = props.entryId;
  return props.list.map(({ content, date, _id, user }) => (
    <div className="item">
      <p className="reviews">{date}</p>
      <p className="content">{content}</p>
      {user === visitUser ? (
        <button
          onClick={() => deleteReview({ entryId: entryId, reviewId: _id })}
        >
          delete review
        </button>
      ) : (
        <p></p>
      )}
      <hr></hr>
    </div>
  ));
}

export default ReviewItem;
