import React from "react";
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { Provider } from 'react-redux';

import './App.css';

import Entry from './components/entry/Entry.jsx';
import Landing from './components/landing/Landing.jsx';

function App() {
    return (
        <main>
            <Router>
                <nav>
                    <Link to='/'> Home Page</Link>
                    <Link to='/entry'> Create Entry</Link>
                </nav>
            <Routes>
                <Route path='/' element={<Landing/>} />
                <Route path='/entry' element={<Entry/>} />
            </Routes>
            </Router>
        </main>
    );
}

export default App;