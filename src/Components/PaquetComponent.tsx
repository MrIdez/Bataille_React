import '../Styles/Carte.css'
import { PaquetDeCarte } from '../Class'

interface PropsP {
	paquet: PaquetDeCarte
}

function createArrayPaquetComp(paquet: PaquetDeCarte) {
	return paquet.GetCarte.map((value) => {
		return <p>{value.AfficheCarte()}</p>
	})
}

function PaquetComp({ paquet }: PropsP) {
	const Paquetcomposant = createArrayPaquetComp(paquet)
	return (
		<ul>
			{Paquetcomposant.map((carte, index) => (
				<li key={`${carte}-${index}`}>{carte}</li>
			))}
		</ul>
	)
}

export default PaquetComp
