<script setup>
	import { defineAsyncComponent } from 'vue';
	import { RouterView } from 'vue-router';
	const navbar = defineAsyncComponent(() =>
		import('../src/components/navbar.vue')
	)
</script>

<template>
	<div class="container">
		<RouterView/>
		<navbar></navbar>
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