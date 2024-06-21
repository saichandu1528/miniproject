// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Layout from './Layouts/Layout'
import Register from './Components/Register';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Courses from './Components/Courses';
import Dsa from './Components/Dsa';
import Daa from './Components/Daa';
import Os from './Components/Os';
import Placement from './Components/Placement';
import Dbms from './Components/Dbms';
import Oops from './Components/Oops';
import Democourses from './Components/Democourses'
import Dsacontent from './Components/Dsacontent';
import Dbmscontent from './Components/Dbmscontent'
import Oscontent from './Components/Oscontent';
import Oopscontent from './Components/Oopscontent';
import Cncontent from './Components/Cncontent';
import Daacontent from './Components/Daacontent';

import Cn from './Components/Cn';



const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Layout/>} >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/course" element={<Courses/>} />
          <Route path="/dsa" element={<Dsa/>} />
          <Route path="/daa" element={<Daa/>} />
          <Route path="/os" element={<Os/>} />
          <Route path="/oops" element={<Oops/>}/>
          <Route path="/dbms" element={<Dbms/>} />
          <Route path="/placement" element={<Placement/>} />
          <Route path="/democourse" element={<Democourses/>} />
          <Route path="/dsacontent" element={<Dsacontent/>} />
          <Route path="/dbmscontent" element={<Dbmscontent/>} />
          <Route path="/oscontent" element={<Oscontent/>} />
          <Route path="/oopscontent" element={<Oopscontent/>} />
          <Route path="/cncontent" element={<Cncontent/>} />
          <Route path="/cn" element={<Cn/>} />
      
          <Route path="/daacontent" element={<Daacontent/>} />




      
        </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
