import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router';
import "./NavBar.css"

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
                <a className="flex-nav-item" href="./">HOME</a>
                {/* ref need to be changed? */}
                <a className="flex-nav-item" href="./">{username}</a>
                <a className="flex-nav-item" href="./" onClick={logout}>Log out</a>
                <a className="flex-nav-item" href="entry">Create Entry</a>
            </nav>
        </div>)
    }


    return (
        <div>
            <nav id="navbar">
                <a className="flex-nav-item" href="./">HOME</a>
                <a className="flex-nav-item" href="Login">Log in</a>
                <a className="flex-nav-item" href="createUser">Sign up</a>
            </nav>
        </div>
    )

}