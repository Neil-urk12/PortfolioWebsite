<script setup>
	import { defineAsyncComponent } from 'vue';
	const intro = defineAsyncComponent(() => import("../components/introduction.vue"));
</script>

<template>
	<div class='main-container'>
		<intro></intro>
	</div>
</template>

<style scoped>
	.main-container{
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
</style>