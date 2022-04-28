import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Entry from './Entry';
import Login from './Login';
import CreateUser from './CreateUser';
import NavBar from './NavBar';

ReactDOM.render(
  <div>
  <BrowserRouter>
  <NavBar />
    <Routes>


      <Route path={"/"} element={<App />}/>
      {/* <Route path={"/review/:reviewId"} element={<Entry />}/> */}
      <Route path={"/login"} element={<Login />} />
      <Route path={"/createUser"} element={<CreateUser />} />
  </Routes>
  </BrowserRouter>
      
  </div>
,
  document.getElementById('root')
);
