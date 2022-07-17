import "../Styles/Carte.css"
import AsPique from "../Assets/AsPique.png"
import { PaquetDeCarte } from "../Class"

interface PropsP {
	paquet: PaquetDeCarte
}

function creatArrayPaquetComp(paquet: PaquetDeCarte) {
	const components = paquet.GetCarte.map((value) => {
		return <p>{value.AfficheCarte()}</p>
	})
	return components
}

function PaquetComp({ paquet }: PropsP) {
	const Paquetcomposant = creatArrayPaquetComp(paquet)
	return (
		<ul>
			{Paquetcomposant.map((carte, index) => (
				<li key={`${carte}-${index}`}>{carte}</li>
			))}
		</ul>
	)
}

export default PaquetComp
