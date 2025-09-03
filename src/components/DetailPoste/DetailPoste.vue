<template>
	<!-- Lien vers la page d'accueil (optionnel) -->
	<router-link to="/">Accueil</router-link>
	<h1>
		Détails du poste: {{ poste.nomPoste ? poste.nomPoste : "Poste inconnu" }}
	</h1>
	<div v-if="poste">
		<div class="poste">
			<p v-if="poste.lieuPoste">Lieu: {{ poste.lieuPoste }}</p>

			<p v-if="poste.salaire">Salaire: {{ poste.salaire }}€ par mois</p>
			<p v-if="poste.tauxHoraire">
				Taux horaire: {{ poste.tauxHoraire }}€ par heure
			</p>
			<p v-if="poste.prime">Prime: {{ poste.prime }}€ de prime</p>

			<p v-if="poste.teletravail">
				Télétravail: {{ poste.teletravail ? "Oui" : "Non" }}
			</p>
			<p v-if="poste.dureeContrat">
				Durée du contrat: {{ poste.dureeContrat }}
			</p>
			<p v-if="poste.dateDemarrage">démarre le {{ poste.dateDemarrage }}</p>
			<p v-if="poste.avantages">Avantages: {{ poste.avantages }}</p>

			<p v-if="poste.diplome">Diplôme: {{ poste.diplome }}</p>
			<p v-if="poste.experience">Expérience: {{ poste.experience }}</p>
			<p v-if="poste.competences">Compétences: {{ poste.competences }}</p>

			<p v-if="poste.missions">Les missions: {{ poste.missions }}</p>
			<p v-if="poste.cultureEntreprise">
				Culture d'entreprise: {{ poste.cultureEntreprise }}
			</p>
			<p>Temps {{ poste.tempsPartiel ? "Partiel" : "Plein" }}</p>
			<p v-if="poste.periodeEssai">Periode d'essai: {{ poste.periodeEssai }}</p>
			<p v-if="poste.periodeIntegration">
				Période d'intégration: {{ poste.periodeIntegration }}
			</p>
			<p v-if="poste.natureContrat">
				Nature / raison du contrat: {{ poste.natureContrat }}
			</p>
			<p v-if="poste.permis">Permis: {{ poste.permis }}</p>
			<p v-if="poste.typeContrat">Type de contrat: {{ poste.typeContrat }}</p>
			<p v-if="poste.mobilitePoste">
				Mobilité du poste: {{ poste.mobilitePoste }}
			</p>
			<p v-if="poste.tailleEntreprise">
				Taille de l'entreprise: {{ poste.tailleEntreprise }}
			</p>
			<p v-if="poste.coordonneesRecruteur">
				Coordonnées du recruteur: {{ poste.coordonneesRecruteur }}
			</p>
			<p v-if="poste.typeRecrutement">
				type de recrutement (étapes): {{ poste.typeRecrutement }}
			</p>
		</div>
		<div class="question">
			<p v-if="!poste.salaire">Quel est le salaire proposé pour ce poste ?</p>
			<p v-if="!poste.dateDemarrage">Quel est la date de prise de poste ?</p>
			<p v-if="!poste.dureeContrat">Quelle est la durée du contrat ?</p>
			<p v-if="!poste.avantages">
				Quels sont les avantages proposés pour vos employés ?
			</p>
			<p v-if="!poste.missions">
				Quelles sont les missions demandées pour ce poste ?
			</p>
			<p v-if="!poste.periodeEssai">y a t'il une periode d'essai ?</p>
			<p v-if="!poste.periodeIntegration">
				y a t'il une periode d'intégration ?
			</p>
			<p v-if="!poste.natureContrat">
				Pour quel raison avez vous postulé cette offre ?
			</p>
			<p v-if="!poste.mobilitePoste">
				Me demandera t'on d'allez a d'autre endroits ?
			</p>
			<p v-if="!poste.coordonneesRecruteur">
				Pourrais-je avoir votre mail pour pouvoir vous contacter ?
			</p>
			<p v-if="!poste.typeRecrutement">
				Quelles seront les étapes du recrutement ?
			</p>
		</div>
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

<style src="./styles.css" scoped></style>
