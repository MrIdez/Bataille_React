
/**
 * @file Les Classes requise pour mes jeux de cartes
 * @author MrIdez
 * @version 0.8.5
 */

//* Fonction et variables utiles
/**
 * Melange un tableau
 * @param a un tableau
 * @returns Le meme tableau mélangé
 */
function shuffle<T>(a:T[]) {
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]]
	}
	return a
}

/**
 * @enum La Hiérarchie de president par ordre croissant
 */
enum hiérarchiePresident {
	TDC,
	ViceTDC,
	Neutre,
	VicePresident,
	President
}

/** 
 *Decris une carte avec sa valeur, sa figure et sa couleur
 *@author MR Idez
*/
class Carte {
	coul : string
	val : number
	fig : string
	/**
	 * Crée une instance de Carte
	 * @param {number} valeur la valeur de la carte
	 * @param {string} couleur la couleur de la carte
	 * @param {string[]} LFig la liste des figures(ex : Valet, Roi, +4 , Atouts ...)
	 */
	constructor(valeur:number,couleur:string,LFig:string[] ){
		this.coul = couleur
		this.val = valeur
		this.fig = LFig[valeur]
	}
	get Valeur() {
		return this.val 
	}
	
	get Couleur() {
		return this.coul
	}

	get Figure() {
		return this.fig
	}

	AfficheCarte() {
		return [this.fig,'de',this.coul].join(' ')
	}
}

/**
 * Un paquet de Carte
 * @author MrIdez
 * @see Carte
 */
class PaquetDeCarte{
	nbcarte : number
	paquet : Carte[]
	/**
	 * Crée un instance de Paquet de Carte
	 * @param {Carte[]} p Un Tableau de Carte, vide par défaut
	 */
	constructor(p:Carte[] =[]){
		this.nbcarte = p.length
		this.paquet = []
		for (const elem of p) {
			this.paquet.push(elem)
		}
	}
	/**
	 * @return un tableau contenant les cartes du Paquet 
	 * */
	get GetCarte():Carte[] {
		return this.paquet
	}
	/**
	 * @returns le nombre de cartes
	 */
	get GetTaille() {
		return this.nbcarte
	}
	/**
	 * Tire une carte du paquet
	 * @returns Une {@link Carte}
	 */
	TirerCarte() : Carte {
		const c:Carte = this.paquet.shift() as Carte
		this.nbcarte -= 1
		return c
	}
	/**
	 * Distribue un nombre de cartes prédéfini
	 * @param nbcartes le nombre de carte à distribuer
	 * @returns un tableur contenant les cartes distribuées
	 */
	Distribuer(nbcartes:number) {
		const main = []
		for (let i = 0 ; i<nbcartes ; i++) {
			main.push(this.TirerCarte())
		}
		return main
	}
	/**
	 * Ramasse un tableau de carte
	 * @param p un tableau de {@link Carte}
	 */
	RamasserC(p:Carte[]) {
		const x = Math.floor(Math.random() * 2)
		if (x == 1) {
			p.reverse()
		}
		for (const elem of p) {
			this.AjouterCarte(elem)
		}
	}
	/**
	 * Ajoute une Carte au paquet
	 * @param c une {@link Carte}
	 */
	AjouterCarte(c:Carte){
		this.paquet.push(c)
		this.nbcarte+=1
	}
	/**
	 * Melange le paquet
	 */
	Melanger() {
		this.paquet = shuffle<Carte>(this.paquet)
	}
}

/** 
 * Décris un Paquet de carte avec toutes les cartes d'un jeu de 32 cartes
 * @classdesc Un Jeu de 32 cartes
 * @extends PaquetDeCarte
 * @see Cartes
 */
class JeuDeCarte32C extends PaquetDeCarte{
	/**
	 * Crée un jeu de 32 carte
	 */
	constructor(){
		const Jeu = []
		const nombre = [7,8,9,10,11,12,13,14]
		for (const coul of ['Tréfle','Pique','Carreaux','Coeur']) {
			const LFig=['Joker','Un','Deux','Trois','Quatre','Cinq','Six','Sept','Huit','Neuf','Dix','Valet','Dame','Roi','As']
			for (let k = 7 ; k<=14 ; k++){
				const une_carte = new Carte(k,coul,LFig)
				Jeu.push(une_carte) 
			}
		}
		super(Jeu) 
	}
}
/**
 * @extends PaquetDeCarte
 */
class JeuDeCarte56C extends PaquetDeCarte{
	/**
	 * Crée un jeu de 32 carte
	 */
	constructor()   {
		const Jeu = []
		for (const coul of ['Tréfle','Pique','Carreaux','Coeur']) {
			const LFig=['Joker','Un','Deux','Trois','Quatre','Cinq','Six','Sept','Huit','Neuf','Dix','Valet','Dame','Roi','As']
			for (let k = 1 ; k<=14 ; k++ ){
				const une_carte = new Carte(k,coul,LFig)
				Jeu.push(une_carte) 
			}
		}
		super(Jeu) 
	}
}
/**
 * @extends PaquetDeCarte
 */
class JeuDeCartePresident extends PaquetDeCarte{
	/**
	 * Crée un jeu de Président
	 */
	constructor()   {
		const Jeu = []
		for (const coul of ['Tréfle','Pique','Carreaux','Coeur']) {
			const LFig=['','','Trois','Quatre','Cinq','Six','Sept','Huit','Neuf','Dix','Valet','Dame','Roi','As','Deux']
			for (let k = 2 ; k<=14 ; k++ ){
				const une_carte = new Carte(k,coul,LFig)
				Jeu.push(une_carte) 
			}
		}
		super(Jeu) 
	}
}
/**
 * @extends PaquetDeCarte
 */
class JeuDeCarteUno extends PaquetDeCarte{
	/**
	 * Crée un jeu de Uno
	 */
	constructor()   {
		const Jeu = []
		for (const coul of ['Tréfle','Pique','Carreaux','Coeur']) {
			const LFig = ['Zéro','Un','Deux','Trois','Quatre','Cinq','Six','Sept','Huit','Neuf','+2','Inversement de sens','Passe ton tour','Joker','+4']
			for (let k = 2 ; k<=15 ; k++ ){
				const une_carte = new Carte(k,coul,LFig)
				Jeu.push(une_carte) 
			}
		}
		super(Jeu)
	}
}

/**
 * Décris joueur caractérisé par son nom , sa pioche et son nombre de cartes
 * @author MrIdez
*/
class Joueur {
	NomJ : string | undefined
	pioche : PaquetDeCarte
	nb_cartes : number
	/**
	 * créer une instance de Joueur
	 * @param NomJoueur le nom de joueur 
	*/
	constructor(NomJoueur?: string) {
		this.NomJ = NomJoueur
		this.pioche = new PaquetDeCarte
		this.nb_cartes = 0
	}
	/**
	 * Renvoie le nom du Joueur
	 * @returns {string | undefined} Le nom du joueur
	 */
	get GetNom(): string | undefined{
		return this.NomJ
	}
	/**
	 * Renvoie la pioche du Joueur
	 * @returns {PaquetDeCarte} la pioche du J (Paquet de Carte)
	 */
	get GetPioche(): PaquetDeCarte{
		return this.pioche
	}
	/**
	 * Renvoie le nombre de cartes du joueurs
	 * @returns {number} Le nombre de carte
	 */
	get GetNbCartes(): number {
		return this.nb_cartes
	}

	/**
	 * Revoie la valeur moyenne de la pioche du joueur
	 * @returns {number} Moyenne de la pioche
	 */
	get ValeurPioche(): number {
		let total = 0
		for (const c of this.pioche.GetCarte) {
			total+=c.Valeur
		}
		return total/this.nb_cartes
	}

	/**
	 * Renvoie un objet data Comprenant le nombre d'As , de Roi , de Dame , de Valet et de petites cartes dans la pioche du joueur
	 * @returns un objet data Comprenant le nombre d'As , de Roi , de Dame , de Valet et de petites cartes
	 */
	get DataPioche() {
		const Data = { As : 0 , Roi : 0 ,Dame : 0 , Valet : 0 , Point : 0}
		for (const c of this.pioche.GetCarte) {
			const valC = c.Valeur
			if (valC > 10) {
				if (valC == 11 ) {
					Data.Valet += 1
				}
				if (valC == 12 ) {
					Data.Dame += 1
				}
				if (valC == 13 ) {
					Data.Roi += 1
				}
				if (valC == 14 ) {
					Data.As +=1
				}
			}
			Data.Point = this.GetNbCartes - (Data.Valet + Data.Dame + Data.Roi + Data.As)
		}
		return Data
	}
	/**
	 * Ajoute une Carte à la pioche du joueur
	 * @param c une {@link Carte}
	 */ 
	AjouterCarte(c:Carte) {
		this.pioche.AjouterCarte(c)
		this.nb_cartes += 1
	}
	/**
	 * Ramasse un tableau de Carte
	 * @param p un tableau de {@link Carte}
	 */
	Ramasser(p:Carte[]) {
		const x = Math.floor(Math.random() * 2)
		if (x==1) {
			p.reverse()
			for (const elem of p) {
				this.AjouterCarte(elem)
			}
		}
		else { 
			for (const elem of p) {
				this.AjouterCarte(elem)
			}}
	}

	/**
	 * Tire une carte de la pioche du joueur
	 * @returns Une Carte {@link Carte}
	 */
	TirerCarte(): Carte{
		const c = this.pioche.TirerCarte()
		this.nb_cartes -= 1
		return c
	}

	/**
	 * Fabrique une chaine de caractere afin d'afficher la data de la la pioche du joueur
	 * @returns {string} Une chaine de caractére de la data de la pioche du {@link Joueur}
	 * @see DataPioche data = retour de this.DataPioche
	 */
	AfficheData(): string {
		const Data = this.DataPioche
		return ['As :',Data.As.toString(),'Rois :',Data.Roi.toString(),'Dames :',Data.Dame.toString(),'Valets :',Data.Valet.toString()].join(' ')
	}
} 



class JoueurPresident extends Joueur {
	etat : hiérarchiePresident
	constructor(Nom:string){
		super(Nom)
		this.etat = hiérarchiePresident.Neutre
	}
}


const Export = {
	JeuDeCarte32C,JeuDeCarte56C,JeuDeCartePresident,JeuDeCarteUno,PaquetDeCarte,Joueur,JoueurPresident,Carte
}

export default Export