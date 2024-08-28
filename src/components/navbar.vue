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
    position: fixed;
    bottom: 10%;
    transform: translateY(50%);
    font-family: "Roboto", sans-serif;
    font-weight: 400;
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
  @media only screen and (max-width: 321px) {
    .navbar{
      margin: 0;
    }
    .navbar ul{
      gap: 0.5rem;
      flex-wrap: wrap;
    }
    a{
      font-size: 1rem;
    }
  }
  @media only screen and (min-width: 1800px) {
    .navbar ul{
      gap: 1.2rem;
    }
    a{
      font-size: 1.85rem;
    }
  }
</style>