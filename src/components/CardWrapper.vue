<script setup>
    import { ref } from 'vue';
    import GradientCard from './GradientCard.vue';

    const dataGradient = ref(null);

    async function FetchData(){
        dataGradient.value = null
        const res = await fetch('/src/gradients.json');
        dataGradient.value = await res.json()
    }

    FetchData();
</script>
<template>  
    <main class="Wrapper">
        <GradientCard v-for="item in dataGradient" :key="item.id" :colors="item.gradient" :title="item.name"/>
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