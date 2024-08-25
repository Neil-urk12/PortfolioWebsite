<script setup>
	import { RouterView } from 'vue-router';
</script>

<template>
	<div class="container">
		<RouterView/>
	</div>
</template>

<style scoped>
	
	.container {
		width: 90%;
		max-width: 1200px;
		/* display: flex; */
		/* justify-content: center;
		align-items: center;
		margin: 0 auto; */
		height: 100vh;
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