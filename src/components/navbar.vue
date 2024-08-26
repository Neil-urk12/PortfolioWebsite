<script setup>
  import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="navbar">
    <ul>
      <RouterLink to='/about'>About</RouterLink>
      <RouterLink to="/projects">Projects</RouterLink>
      <RouterLink to='/'>Home</RouterLink>
      <RouterLink to='/skills'>Skills</RouterLink>
      <RouterLink to='/contact'>Contact</RouterLink>
      <RouterLink>Resume</RouterLink>
    </ul>
  </div>
</template>

<style scoped>
  .navbar{
    margin: 0px;
    position: fixed;
    bottom: 10%;
    transform: translateY(50%);
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    color: white;
    animation: fadeIn 0.5s ease-in-out;
  }

  @keyframes fadeIn{
    from {
      opacity: 0;
    } to {
      opacity: 1;
    }
  }
  
  .navbar ul{
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    gap: 1rem;
  }
  a{
    font-size: 1.2rem;  
    border: 2px solid white;
    padding: 0.35rem 0.5rem;
    border-radius: 1.5rem;
    color: white;
    text-decoration: none;
  }
</style>