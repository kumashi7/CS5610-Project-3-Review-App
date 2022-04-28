// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App.jsx';

// ReactDOM.render(<App />, document.getElementById('root'));


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Entry from './components/entry/Entry';
import Login from './components/login/Login';
import CreateUser from './components/createUser/createUser';
import NavBar from './components/navbar/NavBar';

ReactDOM.render(
  <div>
  <BrowserRouter>
  <NavBar/>
  <Routes>
      <Route path={"/"} element={<App/>}/>
      {/* <Route path={"/review/:reviewId"} element={<Entry />}/> */}
      <Route path={"/login"} element={<Login/>} />
      <Route path={"/createUser"} element={<CreateUser/>} />
  </Routes>
  </BrowserRouter>
      
  </div>
,
  document.getElementById('root')
);