// Footer.js
import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer-container">
       <center>
      <div style={{display:"flex",justifyContent:"center",padding:"10px",color:"white"}}>
       
        <img src="images/udemy.png" alt="" style={{height:"50px",widht:"50px",margin:"0px 30px"}} />
        <img src="images/eduonline.jpg" alt="" style={{height:"50px",widht:"50px",margin:"0px 30px"}} />
        {/* <img src="images/whatsapp.png" alt="" style={{height:"50px",widht:"50px",margin:"0px 30px"}} /> */}
        
      </div>
      <p>&copy; E-learning platform ~2024 </p>
      </center>
    </footer>
  );
};

export default Footer;
