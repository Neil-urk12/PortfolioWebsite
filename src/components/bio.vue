<script setup>
	import { RouterLink } from 'vue-router';
</script>
<template>
	<div class="bio-container">
		<p>Hey! I'm <u>Neil</u>, a 19-year-old Computer Science student from the Philippines.</p>
		<p>I am a <span style='color: #d81357'>passionate</span> developer specializing in back-end technologies with a strong focus on the Spring Framework. My expertise also extends to the front-end with <span style='color:green;'>VueJs</span>. </p>
		<p>As far as my <span style='border-bottom: 2px solid #f9c549'>knowledge</span> goes, I know <u>nothing</u> just like what <span style='color: #506ee7; font-weight:bold;'>Socrates</span> said. I'm still honing my skills on both back-end and front-end technologies :></p>
		<p>I like writing <b>clean</b>, <b>maintainable</b> and <b>efficient</b> code without sacrificing <b>performance</b> and by always prioritizing <b>user-experience</b> in every project. </p>
		<p>When I'm not coding or working on any projects, I like to spend my time with <span style='color:#ff2d54'>meine frau</span>, training and working out, reading books, studying, and playing games. I am weird, I was born with an immense <b>curiosity</b> and a hunger for knowledge. God nerfed me with memory loss though.</p>
		<div class='toGallery'>
			<RouterLink to="/about/gallery">Check out my gallery!</RouterLink>
			<RouterLink to="/about/completions">Some of my completions</RouterLink>
		</div>
	</div>
</template>

<style scoped>
	.bio-container{
		padding: 1.2rem;
		display: flex;
		flex-direction: column;
		width: 130%;
		height: 500px;
		border-radius: 20px;
	}
	.bio-container p, a {
		font-size: 1.25em;
		padding: 0.09rem;
		text-align: left;
	}
	.toGallery{
		margin: auto;
	}
	a{
		padding: 0.5rem 1rem;
		border: 1px solid #0b50c5;
		text-decoration: none;
		border-radius: 2rem;
		color: #ddf3ff;
		background: #0b50c5;
		transition: 0.15s ease-in;
		margin: 0 0.5rem;
	}
	a:hover{
		background: #ddf3ff;
		color: #0b50c5;
	}
	@media screen and (max-width: 426px) {
		.bio-container{
			width: 100%;
			padding: 0.5rem 0;
			height: 450px;
		}
		.bio-container p{
			font-size: 0.75rem;
		}
    }
    /* @media only screen and (min-width: 480px) {
    }
    @media only screen and (min-width: 768px) { 
    }
    @media only screen and (min-width: 992px) {    
    }
    @media only screen and (min-width: 1200px) {  
    } */
</style>