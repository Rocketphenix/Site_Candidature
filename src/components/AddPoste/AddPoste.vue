<template>
	<form v-on:submit.prevent="handleSubmit">
		<label>
			Nom du poste:
			<input type="text" v-model="formData.nomPoste" required />
		</label>

		<label>
			Lieu du poste:
			<input type="text" v-model="formData.lieuPoste" />
		</label>

		<label>
			Mobilité du poste (où le poste pourrais amener):
			<input type="text" v-model="formData.mobilitePoste" />
		</label>

		<label>
			Temps plein ou partiel:
			<input type="radio" value="temps plein" v-model="formData.tempsPoste" />
			Temps plein
			<input type="radio" value="temps partiel" v-model="formData.tempsPoste" />
			Temps partiel
		</label>

		<label>
			Type de contrat:
			<select v-model="formData.typeContrat">
				<option value="CDI">CDI</option>
				<option value="CDD">CDD</option>
				<option value="Alternance">Alternance</option>
				<option value="Stage">Stage</option>
				<option value="Interim">Interim</option>
				<option value="Freelance">Freelance</option>
			</select>
		</label>

		<label>
			Durée du contrat:
			<input type="number" v-model="formData.dureeContrat" />
		</label>

		<label>
			Nature / raison du contrat (Remplacement / Création de poste, ...):
			<input type="text" v-model="formData.natureContrat" />
		</label>

		<label>
			Date de démarrage:
			<input type="date" v-model="formData.dateDemarrage" />
		</label>

		<label>
			Période d'intégration (Formation interne / Tutorat, ...):
			<input type="text" v-model="formData.periodeIntegration" />
		</label>

		<label>
			Periode d'essai:
			<input type="text" v-model="formData.periodeEssai" />
		</label>

		<label>
			Salaire / Taux horaire / Prime:
			<input type="number" v-model="formData.salaire" />
			<input type="number" v-model="formData.tauxHoraire" />
			<input type="text" v-model="formData.prime" />
		</label>

		<label>
			Avantages:
			<input type="input" v-model="formData.avantages" />
		</label>

		<label>
			Télétravail:
			<input type="checkbox" v-model="formData.teletravail" />
		</label>

		<label>
			diplôme:
			<input type="text" v-model="formData.diplome" />
		</label>

		<label>
			Experience:
			<input type="text" v-model="formData.experience" />
		</label>

		<label>
			Permis:
			<input type="text" v-model="formData.permis" />
		</label>

		<label>
			Compétences:
			<input type="text" v-model="formData.competences" />
		</label>

		<label>
			Les missions:
			<input type="text" v-model="formData.missions" />
		</label>

		<label>
			Culture d'entreprise (Valeurs / type de fonctionnement / Réglementation):
			<input type="text" v-model="formData.cultureEntreprise" />
		</label>

		<label>
			Taille de l'entreprise:
			<input type="text" v-model="formData.tailleEntreprise" />
		</label>

		<label>
			Coordonnée du recruteur:
			<input type="text" v-model="formData.coordonneesRecruteur" />
		</label>

		<label>
			type de recrutement (étapes):
			<input type="text" v-model="formData.typeRecrutement" />
		</label>

		<button type="submit">Ajouter le poste</button>
	</form>

	<h2>Liste des postes postulés</h2>
	<ul>
		<li v-for="(poste, index) in postes" :key="index">
			<router-link :to="`/poste/${index}`">
				<h3>{{ poste.nomPoste }}</h3>
				<p>{{ poste.lieuPoste }}</p>
				<div>
					<p>{{ poste.diplome }}</p>
					<p>{{ poste.experience }}</p>
				</div>
			</router-link>
		</li>
	</ul>
</template>

<script>
export default {
	name: "ListePostes",
	data() {
		return {
			formData: {
				nomPoste: "",
				lieuPoste: "",
				mobilitePoste: "",
				tempsPoste: "",
				typeContrat: "",
				dureeContrat: "",
				natureContrat: "",
				dateDemarrage: "",
				periodeIntegration: "",
				periodeEssai: "",
				salaire: "",
				tauxHoraire: "",
				prime: "",
				avantages: "",
				teletravail: false,
				diplome: "",
				experience: "",
				permis: "",
				competences: "",
				missions: "",
				cultureEntreprise: "",
				tailleEntreprise: "",
				coordonneesRecruteur: "",
				typeRecrutement: "",
			},
			postes: [],
		};
	},
	methods: {
		handleSubmit() {
			this.postes.push({ ...this.formData });
			localStorage.setItem("postes", JSON.stringify(this.postes));
			// Reset du formulaire
			this.formData = {
				nomPoste: "",
				lieuPoste: "",
				mobilitePoste: "",
				tempsPoste: "",
				typeContrat: "",
				dureeContrat: "",
				natureContrat: "",
				dateDemarrage: "",
				periodeIntegration: "",
				periodeEssai: "",
				salaire: "",
				tauxHoraire: "",
				prime: "",
				avantages: "",
				teletravail: false,
				diplome: "",
				experience: "",
				permis: "",
				competences: "",
				missions: "",
				cultureEntreprise: "",
				tailleEntreprise: "",
				coordonneesRecruteur: "",
				typeRecrutement: "",
			};
		},
	},
	created() {
		const saved = localStorage.getItem("postes");
		if (saved) {
			this.postes = JSON.parse(saved);
		}
	},
};
</script>

<style src="./styles.css"></style>
