<script setup>
	import Header from './components/Header.vue';
	import CardWrapper from './components/CardWrapper.vue';
</script>

<template>
	<Header color_1="F7941E" color_2="004E8F"/>
	<CardWrapper />
</template>

<style>
	:root{
		--gap: 15px;
		--black: #282828;
		--glass-black: #000000c2;
	}
	.Global--centerAll{
		display: flex;
		justify-content: center;
		align-items: center;
		gap: .1875rem;
	}
</style>
