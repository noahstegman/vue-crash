<script setup>
    import {defineProps} from "vue"
    import {RouterLink, useRouter} from "vue-router"
import router from "../router";
    const {quiz} = defineProps(['quiz'])

    function navigateToQuiz(s) {
      router.push(`/quiz/${s}`)
    }

</script>

<template>
    <div class="card" @click="navigateToQuiz(quiz.id)">
        <img :src="quiz.img" alt=""/>
        <div class="card-text">
            <h2>{{quiz.name}}</h2>
            <p>{{ quiz.questions.length }}</p>
        </div>
    </div>
</template>


<style scoped>

.card{
  width: 310px;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 1px 1px 10px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 35px;
  margin-right: 25px;
  cursor: pointer;
}

.card img{
  width: 100%;
  height: 190px;
  margin: 0;
}

</style>