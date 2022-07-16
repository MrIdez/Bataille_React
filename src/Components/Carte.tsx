import "../Styles/Carte.css"
import AsPique from "../Assets/AsPique.png"
import { JeuDeCarte32C } from "../Class"

const JeuDeCarte = new JeuDeCarte32C()

function CarteComp() {
	return <img alt="Une Carte" src={AsPique} className="CarteImg"></img>
}

export default CarteComp
