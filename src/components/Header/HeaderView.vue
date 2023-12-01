<template>
  <div>
    <h1>{{ H1text }}</h1>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  //   image: {
  //     type: String,
  //   },
  H1text: {
    type: String,
  },
});
</script>

<style scoped>
div {
  background-color: #9395d3;
  width: 100%;
  height: 30vh;
}

h1 {
  text-align: center;
  padding: 120px;
  color: #fff;
}
</style>
