<template>
    <GradientCardLayout>
        <GradientCard 
        v-for="item in data"
        :key="item.id"
        :gradient-color="item.colors"
        :deg="item.deg"
        />
    </GradientCardLayout>
</template> 
<script setup>
    import { ref } from 'vue';

    import GradientCardLayout from '../layout/GradientCardLayout.vue';
    import GradientCard from '../components/GradientCard.vue';

    const data = ref(null);

    data.value = await (await fetch('/data/gradients.json')).json();
</script>
<style lang="scss" scoped>
    
</style>