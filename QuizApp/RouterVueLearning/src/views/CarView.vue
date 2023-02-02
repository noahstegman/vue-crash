<script setup>
    import { useRoute, RouterView, useRouter } from 'vue-router';
    import cars from "../data/cars.json";
    import ContactView from './ContactView.vue';

    const route = useRoute()
    const router = useRouter()

    const car = cars.find(c => c.id === parseInt(route.params.id))

    function showContact() {
        if(car.id == 4) return;
        return router.push(`/cars/${route.params.id}/contact`);
    }

</script>

<template>
    <div class="car" v-if="car">
        <h1>{{ car.name }}</h1>
        <p>{{ car.price }}</p>
        <p>{{ car.year }}</p>
        <button @click="showContact()">Click me for Contact</button>
        <RouterView />
    </div>

    <div v-else>
        Car not found!
    </div>

</template>