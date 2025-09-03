<template>
	<div id="app">
		<!-- Affichage des routes -->
		<router-view />
	</div>
</template>

<script>
export default {
	name: "App",
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
body {
	color: #50d7eb;
	background-color: #1c2533;
	font-size: 20px;
}
h1 {
	text-align: center;
	color: #5692ea;
	text-decoration: underline;
}
</style>
