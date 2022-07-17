import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function NavigationBar() {
	return (
		<Navbar bg="light" expand="lg">
			<Container fluid>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Brand>Navigation</Navbar.Brand>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Link to="/" className="nav-link">
							Acceuil
						</Link>
						<Nav.Link href="#features">Comment ça marche</Nav.Link>
						<Link to="/about" className="nav-link">
							A propos
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}
