import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from 'react-router-dom';
import './NavBar.css';

function OffcanvasExample() {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
          <Navbar.Brand as={Link} to="/">PLANEJÁ</Navbar.Brand>
            
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  PLANEJÁ
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link href="#home">Inicio</Nav.Link>
                  <Nav.Link href="#sobre">Sobre</Nav.Link>
                  <Nav.Link href="#servicos">Serviços</Nav.Link> 
                  <Nav.Link href="#membros">Membros</Nav.Link> 
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <div>
              <Link to="/login" className="buttons me-3">Login</Link>
              <Link to="/cadastro" className="buttons me-3">Cadastro</Link>
            
            </div>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
