<script setup>
    import { ref, onMounted } from 'vue'; 
    import imgsData from '../data/galleryImgs';

    const imgs = ref(imgsData);
    const getDivStyle = (src) => ({
      backgroundImage: `url(${src})`,
    }); 

    const items = ref([]);
    const slide = ref(null);
    const index = ref(0);

    onMounted(() => {
      slide.value = document.querySelector('.slide');
      items.value = document.querySelectorAll('.imgItem');
    });

    function PreviousClick() {
      if (index.value > 0) {
        const prevItem = items.value[index.value - 1];
        slide.value.appendChild(prevItem);
        index.value--;
      }
    }

    function NextClick() {
      if (index.value < items.value.length - 1) {
        const nextItem = items.value[index.value + 1];
        slide.value.prepend(nextItem);
        index.value++;
      }
    }
</script>

<template>
    <div class="back-container">
        <div class="slide">
            <div class="imgItem" v-for="img in imgs" :key="img.src" :style="getDivStyle(img.src)" loading="lazy">
                <a :href="img.src"></a>
            </div>
        </div>
        <div class="buttons">
            <button class="prev" @click="PreviousClick">&#8592;</button>
            <button class="next" @click="NextClick">&#8594;</button>
        </div>
    </div>
</template>

<style scoped>
    .back-container{
		backdrop-filter: blur(5px);
		border: 2px solid rgba(0, 0, 0, 0.803);
		border-radius: 2rem;
		box-shadow: 0 30px 32px 0 rgb(0, 0, 0);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 55rem;
        height: 45rem;
        background: rgba(255, 255, 255, 0.58);
        overflow: hidden;
    }
    .container .slide .imgItem{
        width: 12rem;
        height: 15rem;
        position: absolute;
        top: 20%;
        transform: translate(0, -50%);
        background-position: 50% 50%;
        background-size: cover;
        display: inline-block;
        transition: 0.5s;
        box-shadow: 0 30px 50px black;
    }
    .slide .imgItem:nth-child(1), 
    .slide .imgItem:nth-child(2){
        top: 0;
        left: 0;
        transform: translate(0, 0);
        border-radius: 0;
        width: 100%;
        height: 100%;
    }
    .slide .imgItem:nth-child(3){
        left: 50%;
    }
    .slide .imgItem:nth-child(4){
        left: calc(50% + 220px);
    }
    .slide .imgItem:nth-child(5){
        left: calc(50% + 440px);
    }
    .slide .imgItem:nth-child(n + 6){
        left: calc(50% + 660px);
        opacity: 0;
    }
    .buttons{
        width: 100%;
        text-align: center;
        position: absolute;
        bottom: 8rem;
    }
    .buttons button{
        width: 40px;
        height: 30px;
        border-radius: 8px;
        cursor: pointer;
        margin: 0 1rem;
        border: 1px solid black;
        transition: 0.3s;
    }
    .buttons button:hover{
        background: white;
    }
    .imgItem a{
        width: 100%;
        height: 100%;
    }
</style>