import React from "react";
import Axios from 'axios';

import './App.css'

function getAllEntry() {
    Axios.get('/home', {})
        .then(response => {
            console.log("got all entries");
            console.log(response.data);
        })
        .catch(error => console.log(error));
}

function App() {
    window.addEventListener('load', event => {
        getAllEntry();
    });
    return (
        <div>
            <h1>This is home page</h1>
        </div>
    );
}

export default App;