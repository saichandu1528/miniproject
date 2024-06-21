import React from 'react';
import {Link} from 'react-router-dom';
const Dbms = () => {
  return (
    <div style={styles.container}>
      <h1>helloo</h1>

      <h1 style={styles.heading}> DATABASE MANAGEMENT SYSTEMS</h1>
      <p>Database Management System is a software or technology used to manage data from a database. Some popular databases are MySQL, Oracle, MongoDB, etc. DBMS provides many operations e.g. creating a database, Storing in the database, updating an existing database, delete from the database. DBMS is a system that enables you to store, modify and retrieve data in an organized way. It also provides security to the database.

In this Database Management System tutorial you’ll learn basic to advanced topics like ER model, Relational Model, Relation Algebra, Normalization, File Organization, etc.

</p>
<ul>
  <li>Introduction</li>
  <li>Entity Relationship Model</li>
  <li>Relational Model</li>
  <li>Relational Algebra</li>
  <li>Functional Dependencies</li>
  <li>Normalisation</li>
  <li>Transactions and Concurrency Control</li>
  <li>Indexing, B and B+ trees</li>
  <li>File Organization</li>
  <li>Advanced Topics</li>
  <li>SQL</li>
  <li>Quick Links</li>
</ul>
<b>for more information </b>
    <Link to="/dbmscontent"> <button>Click Here</button></Link>
    <hr/>
      <div style={styles.videoGroup}>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/3EJlovevfcA?si=5M3_-V9BkE6CnIEJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/3EJlovevfcA?si=5M3_-V9BkE6CnIEJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/ZtVw2iuFI2w?si=5JNHYMHIjELSekcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/VyvTabQHevw?si=sCwNf3IPlfLGpnnZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      </div>
      <div style={styles.playlist}>
        <h1 style={styles.heading}>HERE IS THE PLAYLIST LINK</h1>
        <a 
          href="https://youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&si=y_NAZ8gbQ07WHzjh"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.playlistLink}
        >
          https://youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&si=y_NAZ8gbQ07WHzjh
        </a>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=PKpDcVyg3eMmFpHb&amp;list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

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

export default Dbms;
