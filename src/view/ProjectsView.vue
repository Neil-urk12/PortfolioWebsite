<script setup>
import { ref } from "vue";
import navbar from "../components/navbar.vue";
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
  <div class="main-container">
    <h1>Relevant Projects</h1>
    <div class="projects-container">
      <div class="projects" v-for="project in projects" :key="project.id">
        <div class="projectbox">
          <img loading="lazy" :src="project.src" :alt="project.name" />
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
@keyframes left {
  0% {
    opacity: 0;
    transform: translateX(-15%);
  } 100% {
    opacity: 1;
    transform: translateX(0%);
  }
}
@keyframes right {
  0% {
    opacity: 0;
    transform: translateX(15%);
  } 100% {
    opacity: 1;
    transform: translateX(0%);
  }
}
h1 {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 4rem;
  animation: left 1s ease-in-out forwards;
}
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.projects-container {
  background: linear-gradient(135deg,rgba(255, 255, 255, 0.1),rgba(255, 255, 255, 0));
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  width: 100%;
  border-radius: 22px;
  display: flex;
  margin: 1.5rem 0rem 0rem 0rem;
  padding: 0.5rem;
  flex-wrap: wrap;
  animation: right 1s ease-in-out forwards;
}
.projectId,.projectName, .usedTools {
  font-weight: 600;
}
.projectId {
  font-size: 1em;
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
  padding: 2rem;
}
.projectbox img {
  width: 100%;
  aspect-ratio: 16/8;
  border: 2px solid rgb(0, 0, 0);
  border-radius: 20px;
}
</style>