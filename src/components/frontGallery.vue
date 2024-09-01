<script setup>
    import { ref } from "vue";
    import imgsData from "../data/galleryImgs";
    const imgs = ref(imgsData)
</script>

<template>
    <div class="front-container">
        <div class="image-wrap" v-for="img in imgs" :key="img.src">
            <a :href="img.src">
                <img :src="img.src" loading="lazy">
            </a>
        </div>
    </div>
</template>

<style scoped>
    .front-container{
        width: 90%;
        max-width: 1200px;
        padding: 2.5rem 1.25rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
        grid-auto-rows: 250px;
        grid-auto-flow: dense;
        grid-gap: 20px;
    }
    .image-wrap{
        position: relative;
        overflow: hidden;
        border-radius: 20px;
        height: 100%;
        width: 100%;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    img:hover{
        transform: scale(1.1);
    }
</style>