<template>
	<div v-if="poste">
		<h2>{{ poste.nomPoste }}</h2>
		<p>Lieu: {{ poste.lieuPoste }}</p>
		<p>Diplôme: {{ poste.diplome }}</p>
		<p>Expérience: {{ poste.experience }}</p>

		<p>Mobilité du poste: {{ poste.mobilitePoste }}</p>

		<p>Temps {{ poste.tempsPartiel ? "Partiel" : "Plein" }}</p>

		<p>Type de contrat: {{ poste.typeContrat }}</p>

		<p>Durée du contrat: {{ poste.dureeContrat }}</p>

		<p>Nature / raison du contrat: {{ poste.natureContrat }}</p>

		<p>démarre le {{ poste.dateDemarrage }}</p>

		<p>Période d'intégration: {{ poste.periodeIntegration }}</p>

		<p>Periode d'essai: {{ poste.periodeEssai }}</p>

		<p v-if="poste.salaire">Salaire: {{ poste.salaire }}€ par mois</p>
		<p v-if="poste.tauxHoraire">
			Taux horaire: {{ poste.tauxHoraire }}€ par heure
		</p>
		<p v-if="poste.prime">Prime: {{ poste.prime }}€ de prime</p>

		<p>Avantages: {{ poste.avantages }}</p>

		<p>Télétravail: {{ poste.teletravail ? "Oui" : "Non" }}</p>

		<p>diplôme: {{ poste.diplome }}</p>

		<p>Experience: {{ poste.experience }}</p>

		<p>Permis: {{ poste.permis }}</p>

		<p>Compétences: {{ poste.competences }}</p>

		<p>Les missions: {{ poste.missions }}</p>

		<p>Culture d'entreprise: {{ poste.cultureEntreprise }}</p>

		<p>Taille de l'entreprise: {{ poste.tailleEntreprise }}</p>

		<p>Coordonnée du recruteur: {{ poste.coordonneesRecruteur }}</p>

		<p>type de recrutement (étapes): {{ poste.typeRecrutement }}</p>
	</div>
	<div v-else>
		<p>Poste introuvable</p>
	</div>
</template>

<script>
export default {
	name: "PosteDetail",
	props: {
		id: {
			type: [String, Number],
			required: true,
		},
	},
	data() {
		return {
			postes: JSON.parse(localStorage.getItem("postes")) || [],
		};
	},
	computed: {
		poste() {
			return this.postes[parseInt(this.id)];
		},
	},
};
</script>
