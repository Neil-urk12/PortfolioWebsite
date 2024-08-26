<script setup>
	import { RouterView } from 'vue-router';
</script>

<template>
	<div class="container">
		<RouterView/>
	</div>
</template>

<style scoped>
	@import url('https://fonts.googleapis.com/css2?family=Anton&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
	.container {
		width: 90%;
		max-width: 1200px;
		min-height: 100vh;
		padding: 0;
	}

	@media (max-width: 768px) {
		.container {
			width: 95%;
		}
	}

	@media (max-width: 480px) {
		.container {
			width: 98%;
		}
	}

	@media (min-width: 1200px) {
		.container {
			width: 80%;
		}
	}
</style>