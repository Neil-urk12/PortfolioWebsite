<script setup>
import { defineAsyncComponent } from 'vue'
const navbar = defineAsyncComponent(() => import('../components/navbar.vue'))
const project = defineAsyncComponent(() => import('../components/project.vue'))
</script>
<template>
  <div class="main-container">
    <h1>Relevant Projects</h1>
    <project></project>
    <navbar></navbar>
  </div>
</template>

<style scoped>
  @keyframes left {
    0% {
      opacity: 0;
      transform: translateX(-10%);
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
  @media screen and (max-width: 426px) {
    h1{
      font-size: 2.25rem;
    }
    .main-container{
      flex-direction: column;
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