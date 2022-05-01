import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Entry from './components/entry/CreateEntry';
import Login from './components/login/Login';
import CreateUser from './components/createUser/createUser';
import NavBar from './components/navbar/NavBar';

ReactDOM.render(
  <div>
  <BrowserRouter>
  <NavBar/>
  <Routes>
      <Route path={"/"} element={<App/>}/>
      <Route path={"/entry"} element={<Entry/>}/>
      <Route path={"/login"} element={<Login/>} />
      <Route path={"/createUser"} element={<CreateUser/>} />
  </Routes>
  </BrowserRouter>
  </div>
,
  document.getElementById('root')
);