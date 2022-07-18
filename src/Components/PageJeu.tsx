import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"



export default function PageJeu() {
	let {NomJoueur1,NomJoueur2} = useParams()
	if (NomJoueur1 === undefined || NomJoueur2 === undefined) {
		return <script> alert("Impossible de recuperer le nom d'un des joueur"); </script>
	}
	else {return (
		<Container fluid id="MenuJeu">
			<br />
			<h1 className="display-2 text-center">
				{/* {Nomj1} vs {Nomj2}{" "} */}
			</h1>
		</Container>
	)}
	
}
