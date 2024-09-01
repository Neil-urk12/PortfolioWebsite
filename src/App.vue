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
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>