 function Home() {
           const homeStyle = {
    padding: '20px',
    backgroundColor: '#fef6f9',
    textAlign: 'center',
    color: '#660066',
    fontFamily: 'Arial, sans-serif'
  };

  const headingStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    fontStyle: 'italic'
  };

  const paragraphStyle = {
    fontSize: '1.2rem'
  };

  return (
    <div style={homeStyle}>
      <h1 style={headingStyle}>Welcome to Our Company</h1>
      <p style={paragraphStyle}>
        We are dedicated to delivering excellence in all our services.
      </p>
    </div>
  );
}

export default Home;