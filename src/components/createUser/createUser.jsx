// export default function CreateUser(props) {
//     return (
//         <div>CreateUser</div>
//     )
// }
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
            <div>
                <h1>Sign up</h1>
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
                <button onClick={createNewUser} className="click-button">
                    Create User
                </button>
            </div>
        </div>

    )


} 