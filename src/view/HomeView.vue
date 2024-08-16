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
</style>