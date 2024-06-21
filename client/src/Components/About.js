import React from 'react';

const containerStyle = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f2f2f2',
  // backgroundImage: 'url("images/elearn.jpg")',  // Replace "your-image-url.jpg" with the actual image URL
  backgroundSize: 'cover',  // Adjust as needed ('cover', 'contain', or specific dimensions)
  backgroundPosition: 'center',
  color:'white'
};

const spacerStyle = {
  height: '50px',
};

const aboutStyle = {
  width: '600px',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  textAlign: 'center',
  backgroundColor: 'rgb(88, 87, 87)'
};

const contentStyle = {
  marginBottom: '10px',
};


const About = () => {
  return (
    <div style={containerStyle}>
      <div style={spacerStyle}></div>
      <h1>hello</h1>
      <h1>E-Learning platform</h1>

      <div style={aboutStyle}>
        
        <h2  style={{color:"red"}}>Welcome to E-LEARNING PLATFORM</h2>
      </div>
      <div className="about-page" style={{color:"black"}}>
      {/* <h1>About Us</h1> */}
      <p>
        Our mission at E-Learning Website is to revolutionize education by providing accessible, engaging, and personalized learning experiences for learners of all ages and backgrounds.
      </p>
      <h3>What Sets Us Apart</h3>
      <ul>
        <li>Diverse Course Offerings</li>
        <li>Interactive Learning Experience</li>
        <li>Flexible Learning Options</li>
        <li>Community Support</li>
      </ul>
      <h3>Our Vision for the Future Generation</h3>
      <p>
        As we look to the future, our vision is to become a global leader in online education, known for our commitment to excellence, innovation, and accessibility.
      </p>
      <h3>Join Us on this Journey</h3>
      <p>
        Join us on this exciting journey of learning and discovery. Whether you're a student looking to enhance your skills, a professional seeking to advance your career, or a lifelong learner with a thirst for knowledge, [Platform Name] has something for you.
      </p>
      <p>
        Start your learning journey today. Empower yourself, transform your life, and make your mark on the world. The power to learn is in your hands. Let's learn, grow, and succeed together!
      </p>
      <p> for more information click
      <button className="explore-courses">Explore Courses</button></p>
    </div>

    </div>
  );
}

export default About;
