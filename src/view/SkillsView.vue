<script setup>
	import navbar from '@/components/navbar.vue';
	import skillsdiv from '@/components/skills.vue';
	import toolsdiv from '@/components/tools.vue';
</script>

<template>
	<div class='skill-container'>
		<skillsdiv></skillsdiv>
		<toolsdiv></toolsdiv>
	</div>
	<navbar></navbar>
</template>

<style scoped>
	svg{
		height: 4.5em;
		margin: 1rem 0.35rem 1rem 0.35rem;
		transition: 0.5s ease-in;
		border-bottom: 2px solid white;
		transform: scale(1);
	}
	.skill-container{
		/* background: transparent; */
		display: flex;
		flex-direction: row;
		/* justify-content: space-between; */
		align-items: center;
		padding: 10px;
		background-color: rgba(255, 255, 255, 0.5);
		backdrop-filter: blur(10px);
	}
</style>