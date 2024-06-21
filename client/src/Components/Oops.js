import React from 'react';
import { Link } from 'react-router-dom';
const Oops = () => {
  return (
    <div style={styles.container}>
      <h1>oos</h1>

      <h3 style={styles.heading}>Java OOPs Concepts</h3>
<p>In this page, we will learn about the basics of OOPs. Object-Oriented Programming is a paradigm that provides many concepts, such as inheritance, data binding, polymorphism, etc.

Simula is considered the first object-oriented programming language. The programming paradigm where everything is represented as an object is known as a truly object-oriented programming language.

Smalltalk is considered the first truly object-oriented programming language.

The popular object-oriented languages are Java, C#, PHP, Python, C++, etc.</p>
  <ul>
    <li>Object-Oriented Programming</li>
<   li>Advantage of OOPs over Procedure-oriented programming language</li>
    <li>Difference between Object-oriented and Object-based programming language.</li>
  </ul>
<p>The main aim of object-oriented programming is to implement real-world entities, for example, object, classes, abstraction, inheritance, polymorphism, etc.</p>   
<h3>OOPs (Object-Oriented Programming System)</h3>
Object means a real-world entity such as a pen, chair, table, computer, watch, etc. Object-Oriented Programming is a methodology or paradigm to design a program using classes and objects. It simplifies software development and maintenance by providing some concepts:
<ul>
<li>Object</li>
<li>Class</li>
<li>Inheritance</li>
<li>Polymorphism</li>
<li>Abstraction</li>
<li>Encapsulation</li>
</ul>
Apart from these concepts, there are some other terms which are used in Object-Oriented design:
<ul>
  <li>Coupling</li>
  <li>Cohesion</li>
  <li>Association</li>
  <li>Aggregation</li>
  <li>Composition </li>
</ul>
<b>for more information  <Link to="/oopscontent"><button>click here</button></Link></b>

<hr/>
<hr/>
<h1 style={styles.heading}>JAVA AND OOPS</h1>
<h3 style={styles.heading}>Here are some video lectures for OS</h3>
      
      
      
      
      
      
      <div style={styles.videoGroup}>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/bm0OyhwFDuY?si=CdnC9w_dfXBMsbzy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/WRISYpKhIrc?si=Y9RVCPLGyFzY0NwX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


      <iframe width="560" height="315" src="https://www.youtube.com/embed/tSqNBjGacYk?si=TvEW3o9r-kUwKKze" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/NHrsLjhjmi4?si=_pc2EZOPVrM5NL8l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      </div>
      <div style={styles.playlist}>
        <h1 style={styles.heading}>HERE IS THE PLAYLIST LINK</h1>
        <a 
          href="https://youtube.com/playlist?list=PLsyeobzWxl7pe_IiTfNyr55kwJPWbgxB5&si=ZYWxmSUtOmZsFDsp"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.playlistLink}
        >
        
        https://youtube.com/playlist?list=PLsyeobzWxl7pe_IiTfNyr55kwJPWbgxB5&si=ZYWxmSUtOmZsFDsp

        </a>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=CJqvkkYSND4TkzCP&amp;list=PLsyeobzWxl7pe_IiTfNyr55kwJPWbgxB5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    borderRadius: '8px',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  videoGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
    marginBottom: '40px',
  },
  iframe: {
    maxWidth: '100%',
    borderRadius: '8px',
  },
  playlist: {
    textAlign: 'center',
  },
  playlistLink: {
    display: 'block',
    marginBottom: '20px',
    fontSize: '18px',
    color: '#1a0dab',
    textDecoration: 'none',
  },
};

export default Oops;
