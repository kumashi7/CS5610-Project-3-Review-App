import React, {useState} from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router';
import './createUser.css';

export default function CreateUser(props) {


    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function createNewUser() {
        Axios.post('/user', {username, password})
            .then(response => {
                console.log("Created user");
                console.log(response.data);
                navigate('/');

            })
            .catch(error => console.log(error));
    }

    return (
        <div className="container">
            <div action="" className="form">
                <h2>SIGN UP</h2>
                <input type="text" className="box" placeholder="Enter Username" onChange={e => setUsername(e.target.value)} />
                <input type="password" className="box" placeholder="Enter Password" onChange={e => setPassword(e.target.value)} />
                <button id="submit" className="box" onClick={createNewUser}>Create User</button>
            </div>
            <div className="pineapple">
            </div>
        </div>

    )


} 