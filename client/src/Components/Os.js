import React from 'react';
import { Link } from 'react-router-dom';
import os1 from '../Contentimages/os1.png'

const Os = () => {
  return(

<div style={styles.container}>
  <h1> hello</h1>
<h1 style={styles.heading}>OPERATING SYSTEMS</h1>

      
    
        <h3>Introduction of Operating System</h3>
        <p>An Operating System can be defined as an interface between user and hardware. It is responsible for the execution of all the processes, Resource Allocation, CPU management, File Management and many other tasks.</p>
      <p>
        An operating system acts as an intermediary between the user of a computer and computer hardware. The purpose of an operating system is to provide an environment in which a user can execute programs conveniently and efficiently.
      </p>
      <p>
        An operating system is software that manages computer hardware. The hardware must provide appropriate mechanisms to ensure the correct operation of the computer system and to prevent user programs from interfering with the proper operation of the system. A more common definition is that the operating system is the one program running at all times on the computer (usually called the kernel), with all else being application programs.
      </p>
    <div>
<ul>


  <li>Basics</li>
  <li>System Structure</li>
  <li>CPU Scheduling</li>
  <li>Process Synchronization</li>
  <li>Deadlock</li>
  <li>Processes & Threads</li>
  <li>Memory Management</li>
  <li>Disk Management</li>
  <li>Misc</li>
</ul>
<img src={os1} alt="operating systems" style={{ display: 'block', margin: 'auto' }}/>
</div>
<b>for more information  <Link to="/oscontent"><button>click here</button></Link></b>

<hr/>
<hr/>
<h3 style={styles.heading}>Here are some video lectures for OS</h3>
<hr/>
<div style={styles.videoGroup}>
  
      <iframe width="560" height="315" src="https://www.youtube.com/embed/vBURTt97EkA?si=QBcvskNT-n259bcY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/VjPgYcQqqN0?si=RWs_uGRygEkS-Buy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/YcRd3WMbXnE?si=qiYm5vFDL2GH4TrU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/F18RiREDkwE?si=2AoZHL27sQ9okxR6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      </div>
      <div style={styles.playlist}>
        <h1 style={styles.heading}>HERE IS THE PLAYLIST LINK</h1>
        <a 
          href="https://youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&si=GJBBdo4BzwV2CCwJ"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.playlistLink}
        >
        https://youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&si=GJBBdo4BzwV2CCwJ
        </a>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=E_YMa3hqPUmOqITH&amp;list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      </div>
    </div>

)}
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


export default Os;
