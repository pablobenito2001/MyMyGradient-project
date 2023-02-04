<script setup>
    import { ref } from 'vue';
    import GradientCard from './Card/GradientCard.vue';

    const dataGradient = ref(null);

    (async function FetchData(){
        dataGradient.value = null
        const res = await fetch('/src/gradients.json');
        dataGradient.value = await res.json()
    })();

    const background = ref("#F7941E 0%, #004E8F 100%");
    const deg = ref(0)

    function changeBackground(c){
        // deg.value = 0;
        background.value = c;
    }
    function changeDegBackground(d){
        deg.value = d;
    }
</script>
<template>  
    <main :style="{'background-image': `linear-gradient(${ deg }deg, ${ background })`, 'background-attachment': 'fixed'}" class="Show">
        <div class="Wrapper">
            <GradientCard v-for="item in dataGradient" :key="item.id" :colors="item.gradient" :title="item.name" @arrayColor="changeBackground" @degGradient="changeDegBackground"/>
        </div>
    </main>
</template>
<style scoped lang="scss">
    .Wrapper{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));
        grid-auto-rows: auto;
        max-width: 1500px;
        margin: auto;
        gap: var(--gap);
        padding: 1.25rem 1.25rem;
    }
</style>