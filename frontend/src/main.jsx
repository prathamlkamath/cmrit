import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Home.jsx';
import Login from './login.jsx';
import Dashboard from './dash/dashboard.jsx';
import Admindashboard from './dash/Adashboard.jsx';
import Register from './Register.jsx';
import './index.css'
import S from './S.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<S />}>
 
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/adminpanel" element={<Admindashboard/>} />
          {/* <Route path="/adminpanel/dashboard" element={<Admindashboard/>} />
          <Route path="/adminpanel" element={<Admindashboard/>} /> */}

          {/* <Route path="/"  /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
  </Routes>
</BrowserRouter>,
)
