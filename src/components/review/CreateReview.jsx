import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import "./Review.css";

export default function CreateComment({ entryId }) {
  const [content, setContent] = useState("");

  function createReview() {
    Axios.post("/entry/" + entryId + "/review/", { content })
      .then((response) => {
        window.location.reload();
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="addReview">
      <input
        placeholder="Leave a Review here..."
        onChange={(e) => setContent(e.target.value)}
      ></input>
      <br></br>
      <br></br>
      <button onClick={createReview}>Add Review</button>
    </div>
  );
}
