<script setup>
    import { ref, defineAsyncComponent } from 'vue'
    const frontGallery = defineAsyncComponent(() =>import("../components/frontGallery.vue"));
    const backGallery = defineAsyncComponent(() =>import("../components/backGallery.vue"));
    const fliptoBack = ref(false);
</script>

<template>
    <h1>Image Gallery</h1>
    <backGallery v-show="fliptoBack"></backGallery>
    <frontGallery v-show="!fliptoBack"></frontGallery>
    <button class="flipButton" @click="fliptoBack = !fliptoBack">Flip</button>
</template>

<style scoped>
    h1{
        font-size:3rem;
        z-index: 10;
    }
    .flipButton{ 
        font-size: 1.5rem;
        font-weight: 500;
        padding: 0.5rem 1.25rem;
        position:fixed;
        top: 50%;
        right: 1%;
        border-radius: 20px;
        background-color: #4192e4;
        color: white;
    }
</style>