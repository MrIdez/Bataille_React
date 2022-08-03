import { Carte, JeuDeCarte32C, Joueur } from './Class'

export function initJeu(nj1: string, nj2: string) {
	const Paquet = new JeuDeCarte32C()
	Paquet.Melanger()
	const JA = new Joueur(nj1)
	const JB = new Joueur(nj2)
	JA.Ramasser(Paquet.Distribuer(16))
	JB.Ramasser(Paquet.Distribuer(16))
	return [JA, JB]
}

export function partieBat([joueur1, joueur2]: Joueur[]) {
	/*TODO : La partie de bataille*/
	let nbcoup = 0
	while (joueur1.GetNbCartes != 0 && joueur2.GetNbCartes != 0) {
		const jeu1 = [joueur1.TirerCarte(), joueur2.TirerCarte()]
		nbcoup += 1
		coupbataille(joueur1, joueur2, jeu1)
	}
	return
}

function coupbataille(joueur1: Joueur, joueur2: Joueur, jeu1: Carte[]) {
	const cA1 = jeu1[0]
	const cB1 = jeu1[1]
	if (cA1.Valeur > cB1.Valeur) {
		joueur1.Ramasser(jeu1)
	} else if (cA1.Valeur < cB1.Valeur) {
		joueur2.Ramasser(jeu1)
	} else {
		egalite(joueur1, joueur1, jeu1)
	}
	return [joueur1, joueur2]
}

function egalite(JA: Joueur, JB: Joueur, jeu: Carte[]) {
	if (JB.GetNbCartes == 0) {
		JB.Ramasser(jeu)
	} else if (JA.GetNbCartes == 0) {
		JA.Ramasser(jeu)
	} else {
		const cA2 = JA.TirerCarte()
		const cB2 = JB.TirerCarte()
		jeu.push(cA2)
		jeu.push(cB2)
		if (JB.GetNbCartes == 0) {
			if (cA2.Valeur > cB2.Valeur) {
				JA.Ramasser(jeu)
			} else if (cA2.Valeur < cB2.Valeur) {
				JB.Ramasser(jeu)
			} else {
				JB.Ramasser(jeu)
			}
		} else if (JA.GetNbCartes == 0) {
			if (cA2.Valeur > cB2.Valeur) {
				JA.Ramasser(jeu)
			} else if (cA2.Valeur < cB2.Valeur) {
				JB.Ramasser(jeu)
			} else {
				JB.Ramasser(jeu)
			}
		} else {
			const cA3 = JA.TirerCarte()
			const cB3 = JB.TirerCarte()
			jeu.push(cA3)
			jeu.push(cB3)
			if (cA3.Valeur > cB3.Valeur) {
				JA.Ramasser(jeu)
			} else if (cA3.Valeur < cB3.Valeur) {
				JB.Ramasser(jeu)
			} else {
				egalite(JA, JB, jeu)
			}
		}
	}
	return [JA, JB]
}
