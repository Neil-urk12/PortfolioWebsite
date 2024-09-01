<script setup>
    import { ref } from 'vue';
    const courseslides = ref([
        {
            id: 1,
            name: "Design Thinking",
            src: "/src/components/assets/images/completionImgs/hplfedwebpcp.webp"
        },
        {
            id: 2,
            name: "ITIL 4",
            src: "/src/components/assets/images/completionImgs/ITILv4compressed.webp"
        },
        {
            id: 3,
            name: "AWS IOT",
            src: "/src/components/assets/images/completionImgs/awsCert.webp"
        },
        {
            id: 4,
            name: "Full Stack Java Development",
            src: "/src/components/assets/images/completionImgs/fullstackjavasimplilearn.webp",
        },
        {
            id: 5,
            name: "Product Management",
            src: "/src/components/assets/images/completionImgs/productManagement.webp"
        },
        {
            id: 6,
            name: "Intermediate Java",
            src: "/src/components/assets/images/completionImgs/sololernjavaintermedcompressed.png"
        },
        {
            id: 7,
            name: "Intermediate SQL",
            src: "/src/components/assets/images/completionImgs/slolernsqlintermedcompressed.png"
        },
        {
            id: 8,
            name: "Intermediate JavaScript / ES6",
            src: "/src/components/assets/images/completionImgs/slolrnjsIntermedcompressed.png"
        },
    ]);
</script>

<template>
    <div class="certs-container">
        <div class="image-wrap" v-for="course in courseslides" :key="course.id">
            <a :href="course.src">
                <img :src="course.src" loading="lazy">
                <p>{{ course.name }}</p>
            </a>
        </div>
    </div>
</template>

<style scoped>
    .certs-container{
        width: 100%;
        max-width: 1200px;
        padding: 2.5rem 1.25rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(20rem,1fr));
        grid-auto-rows: 18.5rem;
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