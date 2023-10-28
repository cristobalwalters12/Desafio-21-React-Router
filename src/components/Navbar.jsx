import { Link } from 'react-router-dom';
import ReactNavBar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Navbar() {
  return (
    <ReactNavBar bg='danger' variant='dark'>
      <Container>
        <Link to="/Home" className="navbar-brand">🏠 Home</Link>
        <Link to="/Contacto" className="navbar-brand">📒 Contacto</Link>
        <ReactNavBar.Toggle />
        <ReactNavBar.Collapse className="justify-content-end">
            <ReactNavBar.Text>
                <Link to="/Home" className="navbar-brand">🍰Happy Cake</Link>
            </ReactNavBar.Text>
        </ReactNavBar.Collapse>
      </Container>
    </ReactNavBar>
  );
}

export default Navbar;