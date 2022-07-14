import { Navbar,Nav,NavDropdown,Container } from "react-bootstrap";

export default function NavigationBar(){
    return(
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Bataille</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Acceuil</Nav.Link>
            <Nav.Link href="#link">Comment ça marche</Nav.Link>
            <NavDropdown title="A propos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Contact</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Depot GitHub</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

 