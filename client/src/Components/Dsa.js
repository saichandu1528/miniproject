import React from 'react';
import ds from '../Contentimages/dsacontent1.jpg';
import {Link} from 'react-router-dom';

const Dsa = () => {
  return (
    <div style={styles.container}>
  <h1>hello</h1>
     <h1 style={styles.heading}>DATA STRUCTURES AND ALGORITHMS</h1>
     <p>A data structure is a particular way of organising data in a computer so that it can be used effectively. The idea is to reduce the space and time complexities of different tasks. </p>
 <p>Data structures provide an easy way of organising, retrieving, managing, and storing data.</p>

    <ul><b>Here is a list of the needs for data.</b>
      <li> Data structure modification is easy.</li>
      <li>It requires less time. </li>
      <li>Save storage memory space.</li>
      <li>Data representation is easy.</li>
      <li>Easy access to the large database</li>
     <h3> Classification/Types of Data Structures:</h3>
     </ul>
     <ol>
    <li>Linear Data Structure</li>
    <li> Non-Linear Data Structure.</li>
    </ol>

    <h4>1.Linear Data Structure:</h4>
    <ul>
    <li>Elements are arranged in one dimension ,also known as linear dimension.</li>
    <li>Example: lists, stack, queue, etc.</li>
    </ul>
  <h4>2.Non-Linear Data Structure</h4>
  <ul>
    <li>Elements are arranged in one-many, many-one and many-many dimensions.</li>
    <li>Example: tree, graph, table, etc.</li>
    </ul>
    <img src={ds} alt="different types"   style={{ display: 'block', margin: 'auto' }}/>
    <ol>
      <li><b> Array</b></li>
      <li><b>Linked List </b></li>
      <li><b> Queue</b></li>
      <li><b> Stack</b></li>
      <li><b>  Binary Search Tree</b></li>
      <li><b>  Binary Tree</b></li>


    </ol>



    <b>for more information </b> <br></br>
    <Link to="/dsacontent"> <button>Click Here</button></Link>
    <hr/>
    <hr/>
    <h3 style={styles.heading}>Here are some video lectures for DSA</h3>
  
      <div style={styles.videoGroup}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/5_5oE5lgrhw?si=i_-kWzXzYv2erLMC"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={styles.iframe}
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/vgSKOMsjLbc?si=9u6CSCqnl4QNXlwx"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={styles.iframe}
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/1OTX-WXQHCQ?si=VfhZa9LYh50WvELP"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={styles.iframe}
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/5g7K86jYto8?si=Tn5u0mFNS92RepbC"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={styles.iframe}
        ></iframe>
      </div>
      <hr/>
      <h1 style={styles.heading}>Linked List</h1>
      <div style={styles.videoGroup}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/TWMCMvfEAv4?si=ogNer_QxeQJv1aMR"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={styles.iframe}
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ewCc7O2K5SM?si=5lsad-53LsuaWy3t"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={styles.iframe}
        ></iframe>
      </div>
      <hr/>
      <div style={styles.playlist}>
        <h1 style={styles.heading}>HERE IS THE PLAYLIST LINK</h1>
        <a 
          href="https://youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi&si=bho2rydt2eJunrGY"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.playlistLink}
        >
          https://youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi&si=bho2rydt2eJunrGY
        </a>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/videoseries?si=A8gQhPTLzdzV1I5e&amp;list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={styles.iframe}
        ></iframe>
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

export default Dsa;
