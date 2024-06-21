
// import './ref.css';
import "../CSS/course.css"
import * as React from 'react';
import dbms from "./dbms2.jpg";
import dsa from "./dsa.jpg"
import os from "./os.jpg";
import oops from "./oops.jpg";
import placement from "./placement.jpg";
import daa from "./daa.jpg";
import {Link} from 'react-router-dom';
import ca from "../Contentimages/ca1.jpg";
function Course() {
  return (
    <div>
    <marquee direction="right" scrollamount="10" className='mrq'><h1  >Welcome to <b>CSE</b> course!!!</h1></marquee>
    <div className='course'>
    <div class="course-component">
    <Link to="/dbms"> <img src={dbms} alt="dbms"/>
        <h2>DataBase Management Systems</h2></Link>
        </div>
      <div class="course-component">
      <Link to="/dsa"> <img src={dsa} alt="Dsa"/>
        <h2>Data Structures and Algorithms</h2></Link>
    </div>
    <div class="course-component">
    <Link to="/os"><img src={os} alt="os"/>
        <h2>Operating Systems</h2></Link>
    </div>
    <div class="course-component">
    <Link to="/placement"> <img src={placement} alt="traning and placement"/>
        <h2>Training and placement course</h2></Link>
        </div>
    </div>
    <div className='course'>
    <div class="course-component">
        <Link to="/oops"><img src={oops} alt="oops"/>
        <h2>Object Oriented programming using java</h2></Link>
        </div>
      <div class="course-component">
      <Link to="/cn"><img src={ca} alt="Another Course Image"/>
      <h2>Computer Networks</h2></Link>
    </div>
    <div class="course-component">
      <Link to="/daa" ><img src={daa} alt="daa"/>
        <h2>Design And Analysis Of Algorithms</h2></Link>;
    </div>
      </div>
      </div>
  )
}

export default Course
