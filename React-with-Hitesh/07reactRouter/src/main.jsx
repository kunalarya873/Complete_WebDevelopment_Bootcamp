import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './Layout';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Github from './components/Github/Github';
import User from './components/User/User';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path='' element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='contact' element={<Contact/>}/>
              <Route path='user/:userid' element={<User/>}/>
              <Route path='github' element={<Github />} />
          </Route>
        </Routes>
    </Router>
  </React.StrictMode>
);
