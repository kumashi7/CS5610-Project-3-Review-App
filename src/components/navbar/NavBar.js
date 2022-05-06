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
                <div className="logo">
                    <h2>FRESH PINEAPPLE</h2>
                </div>
                <ul className="nav-links">
                    <li>
                        <a href="./">HOME</a>
                        {/* ref need to be changed? */}
                    </li>
                    <li>
                        <a href="./">{username}</a>
                    </li>
                    <li>
                        <a href="./" onClick={logout}>LOG OUT</a>
                    </li>
                    <li>
                        <a href="entry">CREATE ENTRY</a>
                    </li>
                </ul>
                <div className="threeStripes">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        </div>)
    }


    return (
        <div className="body">
            <nav id="navbar">
                <div className="logo"><h2>FRESH PINEAPPLE</h2>
                </div>
                <ul className="nav-links">
                    <li>
                        <a href="./">HOME</a>
                    </li>
                    <li>
                        <a href="Login">LOG IN</a>
                    </li>
                    <li>
                        <a href="createUser">SIGN UP</a>
                    </li>
                </ul>
                <div className="threeStripes">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        </div>
    )

    // const navSlide = () => {
    //     const threeStripes = document.querySelector('.threeStripes');
    //     const nav = document.querySelector('.nav-links');
    //     const navLinks = document.querySelectorAll('.nav-links li');
    //
    //     threeStripes.addEventListener('click', () => {
    //         nav.classList.toggle('nav-active');
    //     });
    //
    //     navLinks.forEach((link, index) => {
    //         link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5}s`;
    //         console.log(index / 5);
    //     });
    // }
    //
    // navSlide();
}