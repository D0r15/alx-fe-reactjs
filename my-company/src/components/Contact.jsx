 import { useState } from 'react';

   function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const containerStyle = {
    padding: '20px',
    backgroundColor: '#f9f0ff',
    fontFamily: 'Tahoma, sans-serif',
    color: '#4a004a'
  };

  const inputStyle = {
    display: 'block',
    margin: '10px 0',
    padding: '8px',
    width: '100%',
    maxWidth: '400px'
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div style={containerStyle}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input
          style={inputStyle}
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          style={inputStyle}
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          style={inputStyle}
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit" style={{ ...inputStyle, backgroundColor: '#660066', color: 'white', cursor: 'pointer' }}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;