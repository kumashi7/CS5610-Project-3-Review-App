import React, { useState, useEffect } from "react";
import Axios from 'axios';

import './App.css'
import EntryCard from "./components/entry/EntryCard";

function App() {
    const [entryList, setEntryList] = useState([]);
    useEffect(() => {
        Axios.get('/entry/')
            .then(response => {
                const newList = [...response.data];
                // console.log(newList);
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

// import React from "react";

// import './App.css'

// function App() {
//     return (
//         <div>
//             <h1>This is home page</h1>
//         </div>
//     );
// }

// export default App;