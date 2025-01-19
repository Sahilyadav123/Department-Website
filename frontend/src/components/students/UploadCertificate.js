import React from 'react';

const HomePage = () => {
  const sectionStyle = {
    padding: '20px',
    margin: '20px auto',
    backgroundColor: 'white',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  };

  const introStyle = {
    fontSize: '18px',
    color: '#555',
    textAlign: 'center',
  };

  const statsStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
    padding: '20px',
    background: '#eef',
    borderRadius: '5px',
  };

  const statItemStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
  };

  return (
    <div>
      <section style={sectionStyle}>
        <h2>Welcome to the Department Portal</h2>
        <p style={introStyle}>
          This portal is designed to help students upload their certificates and for teachers to grade them efficiently.
        </p>
      </section>

      <section style={statsStyle}>
        <p style={statItemStyle}>Students: 120</p>
        <p style={statItemStyle}>Certificates Uploaded: 340</p>
        <p style={statItemStyle}>Certificates Graded: 290</p>
      </section>
    </div>
  );
};

export default HomePage;
