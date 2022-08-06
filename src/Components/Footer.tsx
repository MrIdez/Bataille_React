import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function CustomFooter() {
	return (
		<Container>
			<footer className="d-flex flex-wrap justify-content-between align-items-center border-top py-3 my-4">
				<Col md={4}>
					<p className="text-muted">© 2022 Guillaume, Inc </p>
				</Col>
				<Col md={4}></Col>
				<Col md={4}>
					<Nav className="me-auto">
						<NavLink to="/" className="nav-link text-muted">
							Accueil
						</NavLink>
						<Nav.Link className="nav-link text-muted">
							Comment ça marche
						</Nav.Link>
						<NavLink to="/about" className="nav-link text-muted">
							A propos
						</NavLink>
					</Nav>
				</Col>
			</footer>
		</Container>
	)
}
