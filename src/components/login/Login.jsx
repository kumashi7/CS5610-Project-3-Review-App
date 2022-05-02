import React, {useState} from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router';
import './Login.css';

export default function CreateUser(props) {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function logIn() {
        Axios.post('/user/authenticate', {username, password})
            .then(response => {
                console.log("login: ");
                console.log(response.data);
                navigate('/');
            })
            .catch(error => console.log(error));
    }

    return (
        <div className="container">
            <div>
                <h1>Log in</h1>
            </div>
            <div>
                <h5>Username</h5>
            </div>
            <input value={username} onChange={e => setUsername(e.target.value)} />
            <h5>
                Password
            </h5>
            <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
            <div>
                <button onClick={logIn} className="click-button">
                    Log in
                </button>
            </div>
        </div>

    )


} 