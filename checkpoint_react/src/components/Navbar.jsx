import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Mynavbar() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#faedcd', fontFamily: 'script MJ' }}>
      <Container>
        <Navbar.Brand href="#home">Chez Mamie</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Boutique en ligne" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Pâtisserie</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Epicerie Fine</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Coffrets cadeaux</NavDropdown.Item>              
            </NavDropdown>
            <Nav.Link href="#link"> Chocolats & Macarons </Nav.Link>
            <Nav.Link href="#link"> Mariage & Naissance </Nav.Link>
            <NavDropdown title="Contact" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Email</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Instagram</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Whatsapp</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Our website</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mynavbar;