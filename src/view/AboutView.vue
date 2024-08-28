<script setup>
	import navbar from '@/components/navbar.vue';
	import bio from '@/components/bio.vue';
</script>
<template>
	<div class="about-container"> 
		<h1>Get to know me!</h1>
		<div class='box-container'>
			<div class="pic-container">
				<img loading="lazy" src="src/components/assets/images/compressedProfile.jpeg" alt="Pic" class="pic">
			</div>
			<bio></bio>
		</div>
		<div class='completions'>
		</div>
	</div>
	<navbar></navbar>	
</template>

<style scoped>
	.box-container, .pic-container{
		display: flex;
		align-items: center;
	}
	.about-container{
		background-color: rgba(255, 255, 255, 0.2);
		backdrop-filter: blur(5px);
		border: 2px solid rgba(255, 255, 255, 0.18);
		border-radius: 20px;
		box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
		margin: 1rem 0rem 0rem 0rem;  
		padding: 1rem;
		animation: slideDown 0.5s ease-in-out forwards;
	}
	
	@keyframes slideDown{
		from{
			opacity: 0;
			transform: translateY(-25%);
		} to{
			opacity: 1;
			transform: translateY(0%);
		}
	}
	
	.box-container{
		flex-direction: row;
	}
	
	.pic-container{
		width: 100%;
	}
	
	.pic{
		max-width: 70%;
		width: 100%;
		border: 2px solid black;
		border-radius: 20px;
	} 
	
	h1{
		text-align: center;
		font-size: 3.5em;
	}

	@media screen and (max-width: 426px) {
        h1{
			font-size: 1.85rem;
		}
		.box-container{
			flex-direction: column;
		}
    }
    @media only screen and (min-width: 480px) {
        
    }
    @media only screen and (min-width: 768px) {
        
    }
    @media only screen and (min-width: 992px) {
        
    }
    @media only screen and (min-width: 1200px) {
        
    }
</style>