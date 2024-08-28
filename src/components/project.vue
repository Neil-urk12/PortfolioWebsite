<script setup>
import { ref } from "vue";
    const projects = ref([
        {
            id: 1,
            name: "Banking System",
            src: "src/components/assets/images/compressedBanking.png",
            used: "Html, Css, JavaScript",
        },
        {
            id: 2,
            name: "Product Management",
            src: "src/components/assets/images/compressedPmanagement.jpg",
            used: "Html, Css, JavaScript",
        },
        {
            id: 3,
            name: "TCP Chat Application",
            src: "src/components/assets/images/codeonpcimg.webp",
            used: "Java and Socket Networking",
        },
        {
            id: 4,
            name: "Study Quiz App",
            src: "src/components/assets/images/compressedQuiz.jpg",
            used: "VueJs",
        },
    ]);
</script>

<template>
    <div class="projects-container">
        <div class="projectbox" v-for="project in projects" :key="project.id">
            <div class="projectbox">
                <img loading="lazy" :src="project.src" :alt="project.name" />
                <p class="projectId">Project {{ project.id }}</p>
                <p class="projectName">{{ project.name }}</p>
                <p class="usedTools">{{ project.used }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .projects-container {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
        backdrop-filter: blur(10px);
        border: 2px solid rgba(255, 255, 255, 0.18);
        box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        width: 100%;
        border-radius: 22px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 1.5rem 0rem 0rem 0rem;
        padding: 0.5rem;
        flex-wrap: wrap;
        animation: right 1s ease-in-out forwards;
    }
    @keyframes right {
        0% {
            opacity: 0;
            transform: translateX(10%);
        } 100% {
            opacity: 1;
            transform: translateX(0%);
        }
    }
    .projectId, .projectName, .usedTools {
        font-weight: 600;
    }
    .projectId {
        font-size: 1rem;
    }
    .projectName {
        font-size: 1.5rem;
    }
    .usedTools {
        text-align: center;
        color: rgb(89, 0, 255);
        font-size: 1.15rem;
        background-color: white;
        border-radius: 22px;
    }
    .projectbox {
        width: 20rem;
        padding: 1rem;
    }
    .projectbox img {
        width: 100%;
        aspect-ratio: 16/8;
        border: 2px solid rgb(0, 0, 0);
        border-radius: 20px;
    }
    @media screen and (max-width: 426px) {
        .projects-container{
            padding: 0.25rem 0.25rem 8rem 0.25rem;
        }
        .projectbox{
            width: auto;
            padding: 0.25rem;
        }
        .projectbox img{
            width: 100%;
        }
        .projectId{
            font-size: 0.85rem;
        }
        .projectName{
            font-size: 1.2rem;
        }
        .usedTools{
            font-size: 1rem;
        }
    }
</style>