
// import './ref.css';
import "../CSS/course.css"
import * as React from 'react';
import dbms from "./dbms2.jpg";
import dsa from "./dsa.jpg"
import os from "./os.jpg";
import oops from "./oops.jpg";
import placement from "./placement.jpg";
import daa from "./daa.jpg";
import ca from "../Contentimages/ca1.jpg";
import {Link} from 'react-router-dom';
function Course() {
  return (
    <div>
        hiii
        hiii
     
    <div>
        <div>
            <hello></hello>
        </div>
        <div>
            <hello></hello>
        </div>
        <div>
            <hello></hello>
        </div>
        <div>
            <hello></hello>

            
        </div>
        </div>
        <marquee direction="right" scrollamount="10" className='mrq'><h1  >Welcome to <b>CSE</b> course!!!</h1></marquee>
    
    <div className='course'>
        <h1 style={{color:"red"}} >please Login to   <br/>  Access courses</h1>
    <div class="course-component">
     <img src={dbms} alt="dbms"/>
        <h2>DataBase Management Systems</h2>
        </div>
      <div class="course-component">
     <img src={dsa} alt="Dsa"/>
        <h2>Data Structures and Algorithms</h2>
    </div>
    <div class="course-component">
   <img src={os} alt="os"/>
        <h2>Operating Systems</h2>
    </div>
  
    </div>
    
    <div className='course'>
    <div class="course-component">
    <img src={placement} alt="traning and placement"/>
        <h2>Training and placement course</h2>
        </div>
    <div class="course-component">
       <img src={oops} alt="oops"/>
        <h2>Object Oriented programming using java</h2>
        </div>
      <div class="course-component">
        <img src={ca} alt="Another Course Image"/>
        <h2>Computer Networks</h2>
    </div>
 
    <div class="course-component">
      <img src={daa} alt="daa"/>
        <h2>Design And Analysis Of Algorithms</h2>;
    </div>
     
      </div>
      </div>
  )
}

export default Course
