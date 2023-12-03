<template>
  <input type="text" v-bind="$attrs" modalValue="Value"/>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  modalValue:{
    type:String
  }
})
</script>

<style scoped>
input {
  width: 100%;
  border: none;
  margin: 15px 0;
  outline: transparent;
  border-bottom: 1px solid #8b8787;
}

</style>
