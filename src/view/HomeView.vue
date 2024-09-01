<script setup>
import navbar from '@/components/navbar.vue';
import intro from '@/components/introduction.vue';
</script>

<template>
	<div class='main-container'>
		<intro></intro>
		<navbar></navbar>
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