import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      margin: '0px, 10px',
      padding: '10px 0px',
      backgroundColor: 'purple',
      justifyContent: 'space-between', 
      color: 'white',
      display: 'flex',
      gap: '15px',
      width:'100%',
    }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
      <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
      <Link to="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</Link>
      <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;