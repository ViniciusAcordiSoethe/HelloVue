<script setup>
import TopMenu from '@/components/topMenu.vue';
import Footer from '@/components/footer.vue';

const ssss = import.meta.env.VITE_TESTENV;
</script>
<template>
    <TopMenu />
    <h1>Home</h1>
    <p>Aqui ficara o estudo de Vue Completo {{ ssss }}</p>
    <Footer />
</template>
<style scoped>
</style>