import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router";
import "./Login.css";

export default function CreateUser(props) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function logIn() {
    Axios.post("/user/authenticate", { username, password })
      .then((response) => {
        console.log("login: ");
        console.log(response.data);
        navigate("/");
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="container">
      <div action="" className="form">
        <h2>LOG IN</h2>
        <input
          type="text"
          className="box"
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="box"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button id="submit" className="box" onClick={logIn}>
          Log In
        </button>
      </div>
      <div className="pineapple"></div>
    </div>
  );
}
