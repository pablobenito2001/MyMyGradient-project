<template>
	<HeaderLayout>
		<template #title> 
			MyMyGradient
		</template>
	</HeaderLayout>
	<Suspense>
		<template #default>
			<CardsWrapperModule />
		</template>
		<template #fallback>
			<Loader />
		</template>
	</Suspense>
</template>
<script setup>
	import HeaderLayout from './layout/HeaderLayout.vue'
	import CardsWrapperModule from './modules/CardsWrapperModule.vue';
	import Loader from './components/Loader.vue';
</script>
<style lang="scss">
	:root{
		--black: #1D1D1D;
		--font-ligth: #f1f1f1;
	}
</style>
