<script setup>
	import icons from '@/components/socialsIcons.vue';
</script>

<template>
	<div class = "content-container">
		<div>
			<h1 class='name'>I'm Neil!</h1>
			<p>A Computer Science student</p>
			<p>Aspiring Computer Scientist and Software Engineer</p>
			<icons></icons>
		</div>
		<div>
		</div>
	</div>
</template>

<style scoped>
	.content-container{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.name{
		font-family: "Anton", sans-serif;
		font-weight: 400;
		font-style: normal;
		font-size: 84px;
		margin: 0px
	}
	p{
		font-family: "Montserrat", sans-serif;
		font-optical-sizing: auto;
		font-size: 1.5em;
		margin: 0px;
		font-weight: 500;
	}
	.content-container div{
		text-align: center;
	}
</style>