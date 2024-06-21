import React from 'react';
import { Link } from 'react-router-dom';
import daa1 from '../Contentimages/daa1.png'
const Daa = () => {
  return (
    <div style={styles.container}>
      <h1>Daa</h1>

      <h3 style={styles.heading}>Design Analysis and Algorithm</h3>
    

     <h3> What is Algorithm?</h3>
    <p>A finite set of instruction that specifies a sequence of operation is to be carried out in order to solve a specific problem or class of problems is called an Algorithm.</p>


    <img src={daa1} alt="daa style" style={{ display: 'block', margin: 'auto' }}/>
      <h4>Design and Analysis of Algorithms</h4>
      <p>Design and analysis of algorithms is a crucial subject of computer science technology that deals with developing and studying efficient algorithms for fixing computational issues. It entails several steps, which includes problem formulation, algorithm layout, algorithm analysis, and algorithm optimization.</p>

      <p>The problem formulation process entails identifying the computational problem to be solved as well as specifying the input and output criteria. The algorithm design process entails creating a set of instructions that a computer can use to solve the problem. The algorithm analysis process entails determining the method's efficiency in terms of time and space complexity. Finally, the algorithm optimization process involves enhancing the method's efficiency by making changes to the design or implementation.</p>

      <p>There are several strategies for any algorithm's design and evaluation, including brute force algorithms, divide and conquer algorithms, dynamic programming, and greedy algorithms. Each method has its very own strengths and weaknesses, and the choice of approach depends on the nature of the problem being solved.</p>

      <p>Algorithm analysis is often performed by examining the algorithm's worst-case time and space complexity. The time complexity of an algorithm refers to the amount of time it takes to clear up a problem as a characteristic of the input size. The space complexity of an algorithm refers to the quantity of memory required to solve a problem as a function of the enter length.</p>


      <p>Efficient algorithm design and evaluation are vital for solving huge-scale computational problems in areas which include facts technology, artificial intelligence, and computational biology.</p>



<b>for more information  <Link to="/daacontent"><button>click here</button></Link></b>

<hr/>
<hr/>
<h1 style={styles.heading}>Design Analysis and Algorithm</h1>
<h3 style={styles.heading}>Here are some video lectures for DAA</h3>
      
      
      
      
      
      
      <div style={styles.videoGroup}>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/u8JZ9gU5o4g?si=W4hXu6BsIEH0FQ1l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/itbkP50iggM?si=FUtk6yGe56VfCPBi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/7dz8Iaf_weM?si=yhW4BB-mbGhxK0Y3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/OLttwv_4Ltw?si=xQTbGQMkFz57nk7N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


      </div>
      <div style={styles.playlist}>
        <h1 style={styles.heading}>HERE IS THE PLAYLIST LINK</h1>
        <a 
          href="https://youtube.com/playlist?list=PLxCzCOWd7aiHcmS4i14bI0VrMbZTUvlTa&si=I7igz7qmlJ1I9HHS"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.playlistLink}
        >
        
       
            https://youtube.com/playlist?list=PLxCzCOWd7aiHcmS4i14bI0VrMbZTUvlTa&si=I7igz7qmlJ1I9HHS


        </a>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=YtiK6XXi2r5kXSO7&amp;list=PLxCzCOWd7aiHcmS4i14bI0VrMbZTUvlTa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


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

export default Daa
