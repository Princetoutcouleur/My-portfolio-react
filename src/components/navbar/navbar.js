import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import profil from "../../assets/imgs/baba.png"
import "./navbar.css"
// import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

function NavBar() {
  return (
    <Navbar expand="lg" className="fixed-top navigation">
      <Container>
        <Navbar.Brand href="#head" className="d-flex justify-content-center align-items-center">
          <img src={profil} alt="" className="profil img-fluid me-3" />
          <span>Baba Thiam</span>
        </Navbar.Brand>
        <Navbar.Toggle className="bars" aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-lg-5">
            <Nav.Link href="#project" className="fw-bold liens">
              Project
            </Nav.Link>
            <Nav.Link href="#about" className="fw-bold liens">
              About me
            </Nav.Link>
            <Nav.Link href="#tools" className="fw-bold liens">
              Tools
            </Nav.Link>
            <Nav.Link href="#contact" className="fw-bold liens">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
