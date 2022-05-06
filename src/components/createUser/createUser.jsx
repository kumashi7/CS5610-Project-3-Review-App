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
            <form action="" className="form">
                <h2>SIGN UP</h2>
                <input type="text" name="text" className="box" placeholder="Enter Username" value={username} onChange={e => setUsername(e.target.value)} />
                <input type="password" name="password" className="box" placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)} />
                <button type="submit" id="submit" className="box" onClick={createNewUser}>Create User</button>
            </form>
            <div className="pineapple">
            </div>
        </div>

    )


} 