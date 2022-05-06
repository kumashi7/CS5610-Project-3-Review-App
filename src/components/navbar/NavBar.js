import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router';
import "./NavBar.css"
import { Link } from 'react-router-dom';

export default function NavBar(props) {

    const [username, setUsername] = useState(null);

    const navigate = useNavigate();
    console.log("username: " + username);

    useEffect(function() {
        Axios.get('/user/isLoggedIn')
            .then(response => {
                console.log(response);
                setUsername(response.data.username);
            })
            .catch(error => console.log("User is not logged in"));
    })

    function logout() {
        Axios.post('/user/logout')
        .then(response => {
            // setUsername(null);
            navigate('/')
        })
        .catch(error => console.log("Error logging out"));
    }

    if (username) {
        return (
        <div>
            <nav id="navbar">
                <div className="logo">
                    <a href="./" id="home">FRESH PINEAPPLE</a>
                </div>
                <div className="dropdown">
                <button className="dropbtn nav-font">{username}</button>
                    <div className="dropdown-content nav-font">
                        <Link to="/entry">
                            Create Entry
                        </Link>
                        <a href="./" onClick={logout}>Log out</a>
                    </div>
                </div>
            </nav>
        </div>)
    }


    return (
        <div className="body">
            <nav id="navbar">
                <div className="logo">
                    <a href="./">FRESH PINEAPPLE</a>
                </div>
                <ul className="nav-links">
                    <li>
                        <a href="Login">LOG IN</a>
                    </li>
                    <li>
                        <a href="createUser">SIGN UP</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}