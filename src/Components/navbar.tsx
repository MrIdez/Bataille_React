import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap"

export default function NavigationBar() {
	return (
		<Navbar bg="light" expand="lg">
			<Container fluid>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Brand href="#home">Navigation</Navbar.Brand>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#home">Acceuil</Nav.Link>
						<Nav.Link href="#features">Comment ça marche</Nav.Link>
						<Nav.Link href="#pricing">A propos</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}
