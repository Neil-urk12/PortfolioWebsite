<script setup>
    import { ref } from "vue";
    import navbar from "../components/navbar.vue";
    const projects = ref([        
        { id: 1, name: 'Banking System', src: "src/components/assets/images/compressedBanking.png", used: "Html, Css, JavaScript" },        
        { id: 2, name: 'Product Management', src: "src/components/assets/images/compressedPmanagement.jpg", used: "Html, Css, JavaScript" },        
        { id: 3, name: 'TCP Chat Application', src:"src/components/assets/images/codeonpcimg.webp", used: "Java and Socket Networking" },
        {id: 4, name: 'Study Quiz App', src: "src/components/assets/images/compressedQuiz.jpg", used: "VueJs"} 
    ]);
</script>
<template>
    <div class="main-container">
        <h1>Relevant Projects</h1>
        <div class="projects-container">
            <div class="projects" v-for="project in projects" :key="project.id">
                <div class="projectbox">
                    <img loading="lazy" :src="project.src" :alt="project.name"/>
                    <p class="projectId">Project {{ project.id }}</p>
                    <p class="projectName">{{ project.name }}</p>
                    <p class="usedTools">{{ project.used }}</p>
                </div>
            </div>
        </div>
        <navbar></navbar>
    </div>
</template>

<style scoped>
    h1{
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 4rem;
        animation: slideLeft 1s ease-in-out forwards;
    }
    .main-container{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        width: 100%;
    }
    .projects-container{
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
		backdrop-filter: blur(10px);
		border: 2px solid rgba(255, 255, 255, 0.18);
		box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
		width: 100%;
		border-radius: 22px;
        display: flex;
        justify-content: baseline;
        padding: 0.2rem;
        flex-wrap: wrap;
        animation: slideRight 1s ease-in-out forwards;
    }

    @keyframes slideLeft{
        from{
            opacity: 0;
            transform: translateX(-15%);
        } to {
            opacity: 1;
            transform: translateX(0%);
        }
    }
    @keyframes slideRight{
        from{
            opacity: 0;
            transform: translateX(15%);
        } to {
            opacity: 1;
            transform: translateX(0%);
        }
    }
    .projects, .projectbox{
        display: block;
    }
    .projects, .projectbox img{
        border: 2px solid black;
        border-radius: 20px;
    }
    .projects{
        margin: 1rem auto; 
        background: white;
    }
    .projectbox{
        width: 20rem;
        padding: 1.5rem;
    }
    .projectbox img{
        width: 100%;
        aspect-ratio: 16/8;
    }

    .projectId, .projectName, .usedTools{
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
    }
    .projectId{
        font-size:1em;
    }
    .projectName{
        font-size: 1.5rem;
    }
    .usedTools{
        text-align: center;
        color: rgb(60, 0, 255);
    }

</style>