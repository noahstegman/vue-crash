<script setup>
    import { RouterLink } from 'vue-router';

</script>

<template>
    <nav>
        <RouterLink active-class="active" to="/"><div class="link">Home</div></RouterLink>
        <RouterLink active-class="active" to="/about"><div class="link">About</div></RouterLink>
        <div class="link">Contact</div>
        <div class="link">Quizzes</div>
    </nav>
</template>

<style scoped>

    .active{
        font-weight: 900;
        color: gold;
        font-size: 50px;
    }

</style>