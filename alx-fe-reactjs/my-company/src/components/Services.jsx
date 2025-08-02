 function Services() {
      const containerStyle = {
    padding: '20px',
    backgroundColor: '#e5f5ec',
    fontFamily: 'Verdana, sans-serif',
    color: '#004d00'
  };

  const listStyle = {
    listStyleType: 'square',
    paddingLeft: '20px'
  };

  return (
    <div style={containerStyle}>
      <h1>Our Services</h1>
      <ul style={listStyle}>
        <li>Technology Consulting</li>
        <li>Market Analysis</li>
        <li>Product Development</li>
      </ul>
    </div>
  );
}

export default Services;