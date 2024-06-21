import React, { useState } from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Components/AuthContext';

const Header = () => {
  const { logout } = useAuth();
  const [search,setsearch] = useState('');
  const navigate = useNavigate();
  const user1 = localStorage.getItem('user');

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleDashboard = () => {
    navigate('/course');
  };

  const handleSearch = () => {
    // Navigate to the Response component with the search query as a parameter
    navigate(`/response?query=${encodeURIComponent(search)}`);
    console.log(search);
    setsearch('');
  };
  const handleHome=()=>
    {
      navigate('/');
    }

  return (
    <header className="header-container">
      <div style={{display:"flex",margin:"7px"}}><img src='images/logo.png' alt=''className='movieimg'/></div>
      {/* <h4 style={{margin:"10px"}}>E-learning</h4> */}
      <nav className="navbar">
        <ul>
     
          {user1 ? (
            <>
            
            <li onClick={handleHome} style={{fontWeight:"700",cursor:"pointer",marginTop:"10px"}}>Home</li>
            <li onClick={handleDashboard} style={{fontWeight:"700",cursor:"pointer",marginTop:"10px"}}>Courses</li>
            <input type='text' name='search' className={"form-control me-2 mx-1 "} value={search} onChange={(e) => setsearch(e.target.value)} style={{marginTop:"8px",width:"200px"}}/>
            <input type='button' name='searchbtn' onClick={handleSearch} className={"btn btn-outline-primary mx-2 "} value={"search"} style={{marginTop:"8px",width:"100px"}}/>
            {/* <li onClick={handleLogout} style={{fontWeight:"700",cursor:"pointer"}}>Logout</li> */}
            <button type="button" class="btn btn-danger mx-2" onClick={handleLogout} style={{marginTop:"8px",width:"100px"}}>Logout</button>
            
         
            </>
          ) : (
            <>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/democourse">Course</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
