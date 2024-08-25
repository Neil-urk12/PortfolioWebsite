<script setup>
  import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="navbar">
    <ul>
      <RouterLink to='/about'>About</RouterLink>
      <RouterLink>Projects</RouterLink>
      <RouterLink to='/'>Home</RouterLink>
      <RouterLink to='/skills'>Skills</RouterLink>
      <RouterLink>Contact</RouterLink>
      <RouterLink>Resume</RouterLink>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavbarComponent',
};
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  *{
    margin: 0px;
    padding: 0px;
  }
  .navbar{
    margin: 0px;
    position: fixed;
    bottom: 10%;
    transform: translateY(50%);
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    color: white;
    animation: fadeIn 0.5s ease-in-out;
  }

  @keyframes fadeIn{
    from{
      opacity: 0;
    }
    to{
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