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
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: gray;
		width: 90%;
		max-width: 1200px;
		margin: 0 auto;
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