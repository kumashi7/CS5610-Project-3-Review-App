import React, { useState, useEffect } from "react";
import Axios from 'axios';

import './App.css'
import EntryCard from "./components/entry/EntryCard";

function App() {
    const [entryList, setEntryList] = useState([]);
    useEffect(() => {
         // Retrieve entries from database
        Axios.get('/home')
            .then(response => {
                const newList = [...response.data];
                setEntryList(newList);
            });
    },[]);

    if (!entryList || entryList.length === 0) {
        return (<div>
            Loading data, please wait...
        </div>)
    }

    return (
        <div>
            <EntryCard list={entryList} />
        </div>
    );
}

export default App;