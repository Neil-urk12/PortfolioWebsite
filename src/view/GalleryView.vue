<script setup>
    import { ref, onMounted, defineAsyncComponent } from 'vue'
    const navbar = defineAsyncComponent(() => import('../components/navbar.vue'))

    const imgs = ref([
        {
            src: "/src/components/assets/images/apod/Geminid.jpg"
        },
        {
            src: "/src/components/assets/images/apod/EclipseMap.jpg"
        },
        {
            src: "/src/components/assets/images/apod/SaturnHexagon.jpg"
        },
        {
            src: "/src/components/assets/images/apod/MWayLaPalma.jpg"
        },
        {
            src: "/src/components/assets/images/apod/NorthernPluto.jpg"
        },
        {
            src: "/src/components/assets/images/apod/RedSpritenTree.jpg"
        },
        {
            src: "/src/components/assets/images/apod/WesternVeilNebula.jpg"
        },
        {
            src: "/src/components/assets/images/apod/EarthfrmOrion.jpg"
        },
        {
            src: "/src/components/assets/images/apod/NorthernLightsStratosphere.jpg"
        },
        {
            src: "/src/components/assets/images/apod/HoagsObject.jpg"
        },
        {
            src: "/src/components/assets/images/apod/CPBsSwirlingCorona.jpg"
        },
        {
            src: "/src/components/assets/images/apod/FacingNgc.jpg"
        },
        {
            src: "/src/components/assets/images/apod/NorthCelestialAurora.jpg"
        },
        {
            src: "/src/components/assets/images/apod/GiganticJets.jpg"
        },
        {
            src: "/src/components/assets/images/apod/Messier24StarCloud.jpg"
        },
        {
            src: "/src/components/assets/images/apod/SolarProminence.jpg"
        },
        {
            src: "/src/components/assets/images/galleryImgs/compressedGallpic23.jpg"
        },
        {
            src: "/src/components/assets/images/galleryImgs/compressedgallpic14.jpg"
        },
        {
            src: "/src/components/assets/images/galleryImgs/compressedgallpic28.jpeg"
        },
        {
            src: "/src/components/assets/images/galleryImgs/compressedgallpic29.JPEG"
        },
        {
            src: "/src/components/assets/images/galleryImgs/gallpic7.jpg"
        },
        {
            src: "/src/components/assets/images/galleryImgs/compressedGallpic25.jpg"
        },
        {
            src: "/src/components/assets/images/galleryImgs/gallpic19.jpg"
        },
        {
            src: "/src/components/assets/images/galleryImgs/compressedGallpic22.jpg"
        },
        {
            src: "/src/components/assets/images/galleryImgs/compressedGallpic26.jpg"
        },
        {
            src: "/src/components/assets/images/galleryImgs/compressedGallpic5.jpg"
        },
        {
            src: "/src/components/assets/images/galleryImgs/compressedgallpic24.jpg"
        },
        {
            src: "/src/components/assets/images/galleryImgs/gallpic18.jpg"
        },
        {
            src: "/src/components/assets/images/galleryImgs/gallpic10.jpg"
        },
        {
            src: "/src/components/assets/images/galleryImgs/gallpic9.jpg"
        },
        {
            src: "/src/components/assets/images/galleryImgs/compressedGallpic4.jpg"
        },
        {
            src: "/src/components/assets/images/galleryImgs/gallpic11.jpg"
        },
        {
            src: "/src/components/assets/images/galleryImgs/gallpic17.jpg"
        },
        {
            src: "/src/components/assets/images/galleryImgs/gallpic21.jpg"
        },
        {
            src: "/src/components/assets/images/galleryImgs/gallpic16.jpg"
        }
    ]);

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
    const fliptoBack = ref(false);
</script>

<template>
    <h1>Image Gallery</h1>
    <div class="back-container" v-show="fliptoBack">
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
    <div class="front-container" v-show="!fliptoBack">
        <div class="image-wrap" v-for="img in imgs" :key="img.src">
            <a :href="img.src">
                <img :src="img.src" loading="lazy">
            </a>
        </div>
    </div>
    <button class="flipContainer" @click="fliptoBack = !fliptoBack">Flip</button>
    <navbar></navbar>
</template>

<style scoped>
    h1{
        font-size:3rem;
        z-index: 10;
    }
    .front-container{
        width: 100%;
        max-width: 1200px;
        padding: 2.5rem 1.25rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
        grid-auto-rows: 250px;
        grid-auto-flow: dense;
        grid-gap: 20px;
        background-color: white;
    }
    .image-wrap{
        position: relative;
        overflow: hidden;
        border-radius: 20px;
        height: 100%;
        width: 100%;
    }
    .front-container .image-wrap img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    .front-container .image-wrap:hover img{
        transform: scale(1.1);
    }
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
    .flipContainer{
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