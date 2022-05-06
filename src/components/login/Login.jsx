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
            <form action="" className="form">
                <h2>LOG IN</h2>
                {/*<label>Username</label>*/}
                <input type="text" name="text" className="box" placeholder="Enter Username" value={username} onChange={e => setUsername(e.target.value)} />
                {/*<label>Password</label>*/}
                <input type="password" name="password" className="box" placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)} />
                <button type="submit" id="submit" className="box" onClick={logIn}>Log In</button>
            </form>
            <div className="pineapple">
            </div>
        </div>
    )
} 