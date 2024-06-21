import React from 'react';

const Placement = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>OPERATING SYSTEMS</h1>
      <div style={styles.videoGroup}>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/tnc9ojITRg4?si=KQcKkSTsi5-mFoBH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    <iframe width="560" height="315" src="https://www.youtube.com/embed/ZuMJFleXmiw?si=koMu7Ysjtup_69Ph" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/jAbpPTpz2bQ?si=7GYOyMgUF5hXFaXk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      </div>
      <div style={styles.playlist}>
        <h1 style={styles.heading}>HERE IS THE PLAYLIST LINK</h1>
        <a 
          href="https://youtube.com/playlist?list=PLpyc33gOcbVA4qXMoQ5vmhefTruk5t9lt&si=HVn0jbBcb29xXTn5"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.playlistLink}
        >
        
        https://youtube.com/playlist?list=PLpyc33gOcbVA4qXMoQ5vmhefTruk5t9lt&si=HVn0jbBcb29xXTn5
        </a>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=-BdInP9rD4XiRLmn&amp;list=PLpyc33gOcbVA4qXMoQ5vmhefTruk5t9lt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

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

export default Placement;
