<script setup>
	import navbar from '@/components/navbar.vue';
</script>
<template>
	<div class="about-container"> 
		<h1>ABOUT</h1>
		<div class='box-container'>
			<div class="pic-container">
				<img src="src/components/assets/images/portflipic.jpeg" alt="Pic" class="pic">
			</div>
			<div class="bio-container">
				<div>
					<p>Bio etc </p>
				</div>
			</div>
		</div>
	</div>
	<navbar></navbar>	
</template>

<style scoped>
	.about-container{
		background-color: rgba(255, 255, 255, 0.2);
		backdrop-filter: blur(5px);
		max-height: 35rem;
		margin: 1.5rem 0rem 0rem 0rem;  
		padding: 1rem;
		animation: fadeIn 1s ease-in-out forwards;
	}
	.about-container::-webkit-scrollbar {
		display: none;
	}
	.about-container {
		-ms-overflow-style: none;  /* IE and Edge */
		scrollbar-width: none;  /* Firefox */
	}
	@keyframes fadeIn{
		from{
			opacity: 0;
		}
		to{
			opacity: 1;
		}
	}
	.box-container{
		display: flex;
		flex-direction: row;
	}
	.pic-container{
		display: flex;
		width: 100%;
		align-items: center;
		animation: slideIn ease-in-out 1s forwards;
	}
	@keyframes slideIn{
		from{
			transform: translateX(-100%);
			opacity: 0;
		}
		to{
			transform: translateX(0%);
			opacity: 1;
		}
	}
	.bio-container{
		display: flex;
		background: white;
		width: 500px;
		height: 500px;
	}
	.pic{
		max-width: 40%;
		width: 100%;
		/* border-radius: 50%; */
		border: 2px solid black;
	}
	h1{
		text-align: center;
	}
</style>