import React, { useState, useEffect } from "react";
import Axios from "axios";

import "./App.css";
import EntryCard from "./components/entry/EntryCard";

function App() {
  const [entryList, setEntryList] = useState([]);
  useEffect(() => {
    Axios.get("/entry/").then((response) => {
      const newList = [...response.data];
      // console.log(newList);
      setEntryList(newList);
    });
  }, []);

  if (!entryList || entryList.length === 0) {
    return <div>Loading data, please wait...</div>;
  }

  return (
    <div className="bg">
      <EntryCard className="entryCard" list={entryList} />
    </div>
  );
}

export default App;
