import React from "react";
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { Provider } from 'react-redux';

import './App.css';

import Entry from './components/entry/Entry.jsx';

function App() {
    return (
        <main>
            <Router>
                <nav>
                    <Link to='/entry'> Create Entry</Link>
                </nav>
            <Routes>
                <Route path='/entry' element={<Entry/>} />
            </Routes>
            <div>
                <h1>Home Page</h1>
            </div>
            </Router>
        </main>
    );
}

export default App;