import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function NavigationBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand>Navigation</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className="nav-link">
                            Accueil
                        </NavLink>
                        <Nav.Link href="#features">Comment ça marche</Nav.Link>
                        <NavLink to="/about" className="nav-link">
                            A propos
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
