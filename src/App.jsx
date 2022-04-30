import React, { useState, useEffect } from "react";
import Axios from 'axios';

import './App.css'

function App() {
    const [entryList, setEntryList] = useState([]);
    // window.addEventListener('load', event => {
    //     // Retrieve entries from database
    //     Axios.get('/home', {})
    //     .then(response => {
    //         setEntryList(response.data);
    //         console.log(entryList);
    //         console.log(response.data);
    //     })
    //     .catch(error => console.log(error));
    // });
    useEffect(() => {
        Axios.get('/home')
            .then(response => {
                const newList = [...response.data];
                setEntryList(newList);
                console.log(newList);
                console.log(entryList);
                console.log(response.data);
            });
    },[]);

    if (!entryList || entryList.length == 0) {
        return (<div>
            loading...
        </div>)
    }

    return (
        <div>
            <h1>This is home page</h1>
            <div>{entryList[0].title}</div>
            {entryList.map(({title, genre, release, content, reviews, _id}) => 
                <div>{title}  {genre} {release}</div>
            )}
        </div>
    );
}

export default App;