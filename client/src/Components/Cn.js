import React from 'react';
import { Link } from 'react-router-dom';
import cn1 from "../Contentimages/cn1.png";
const Cn = () => {
  return (
    <div style={styles.container}>
      <h1>oos</h1>


      <h3>Computer Network </h3>
<p>Computer Network provides basic and advanced concepts of Data Communication & Networks (DCN). Our Computer Networking Tutorial is designed for beginners and professionals.</p>

<p>Our Computer Network tutorial includes all topics of Computer Network such as introduction, features, types of computer network, architecture, hardware, software, internet, intranet, website, LAN, WAN, etc.</p>

  <h4>What is Computer Network?</h4>
<p>A computer network is a set of devices connected through links. A node can be computer, printer, or any other device capable of sending or receiving the data. The links connecting the nodes are known as communication channels.</p>

<p>Computer Network uses distributed processing in which task is divided among several computers. Instead, a single computer handles an entire task, each separate computer handles a subset.</p>
<img src={cn1} alt="cn"/>


<ul>
  <li><b>Security: </b>It provides limited interaction that a user can have with the entire system. For example, a bank allows the users to access their own accounts through an ATM without allowing them to access the bank's entire database.</li>
  <li><b>Faster problem solving:</b> Multiple computers can solve the problem faster than a single machine working alone.</li>
  <li><b>Security through redundancy:</b> Multiple computers running the same program at the same time can provide the security through redundancy. For example, if four computers run the same program and any computer has a hardware error, then other computers can override it.</li>
</ul>

<b>for more information  <Link to="/cncontent"><button>click here</button></Link></b>




<hr/>
<hr/>

        <h3 style={styles.heading}>Here are some video lectures for CN</h3>

      <div style={styles.videoGroup}><iframe width="560" height="315" src="https://www.youtube.com/embed/m8eNwVel5xI?si=AzrxLpPbBJnyqTwG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/m8eNwVel5xI?si=AzrxLpPbBJnyqTwG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/ly8ikWtAY7s?si=FS28i87lZWUDc-_r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/EBTP0mpCGBM?si=rk5WJyZp67wKMZNw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      </div>
      <div style={styles.playlist}>
        <h1 style={styles.heading}>HERE IS THE PLAYLIST LINK</h1>
        <a 
          href="https://youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&si=QH4qSrw4XxyQd-be"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.playlistLink}
        >
        
          https://youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&si=QH4qSrw4XxyQd-be

        </a>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=QH4qSrw4XxyQd-be&amp;list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>



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

export default Cn
