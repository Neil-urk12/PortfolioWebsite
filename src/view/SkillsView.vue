<script setup>
	import navbar from '@/components/navbar.vue';
	import languages from '@/components/languages.vue';
	import toolsdiv from '@/components/tools.vue';
	import otherTech from '@/components/otherTechnologies.vue';
</script>

<template>
	<div class='skill-container'>
		<div class='techSkills'>
			<h1>Tech Skills</h1>
			<languages></languages>
			<toolsdiv></toolsdiv>
			<otherTech></otherTech>
		</div>
		<div class='otherSkills'>
			<h1>Other Skills</h1>
			<div class='relatedTechSkills'>
				<h3>Other Tech Skills</h3>
				<ul>
					<li>Wireframing</li>
					<li>Prototyping</li>
					<li>Code Review</li>
					<li>Prompt Engineering</li>
				</ul>
			</div>
			<div class='nonTechSkills'>
				<h3>Non Tech Skills</h3>
				<ul>
					<li>Design Thinking</li>
					<li>Problem Solving</li>
					<li>Algorithmic Thinking</li>
					
				</ul>
			</div>
		</div>
		<navbar></navbar>
	</div>
</template>

<style scoped>
	svg{
		height: 3.5em;
		margin: 0.5rem 0.35rem 0.5rem 0.35rem;
		transition: 0.5s ease-in;
		border-bottom: 2px solid white;
		transform: scale(1);
	}
	
	.skill-container{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		width: 100%;
	}
	
	.techSkills, .otherSkills{
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
		backdrop-filter: blur(10px);
		border: 2px solid rgba(255, 255, 255, 0.18);
		box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
		width: 100%;
		border-radius: 20px;
		margin: 2rem 1rem;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.techSkills{
		animation: slideLeft 1s ease-in-out forwards;
	}
	
	.otherSkills{
		animation: slideRight 1s ease-in-out forwards;
	}
	
	@keyframes slideRight{
		from{
			transform: translateX(25%);
			opacity: 0;
		}
		to{
			transform: translateX(0%);
			opacity: 1;
		}
	}
	
	@keyframes slideLeft{
		from {
			transform: translateX(-25%);
			opacity: 0;
		}
		to {
			transform: translateX(0%);
			opacity: 1;
		}
	}
	
	.relatedTechSkills, .nonTechSkills{
		display: flex;
		align-items: center;
		margin: 0.5rem 0rem;
	}
	
	h3{
		margin: 1rem;
	}
	
	ul li{
		list-style-type: none;
		text-align: center;
		font-size: 1.25em;
	}
	
	h1{
		text-align: center;
		font-family: "Montserrat", sans-serif;
		font-optical-sizing: auto;
	}
	
	h3{
		font-family: "Anton", sans-serif;
		font-weight: 400;
	}
</style>