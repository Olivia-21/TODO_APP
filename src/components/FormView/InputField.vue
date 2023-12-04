<template>
  <input
    type="text"
    v-bind="$attrs"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  modelValue: {
    type: String,
  },
});
</script>

<style scoped>
input {
  width: 100%;
  border: none;
  margin-top: 50px;
  outline: transparent;
  border-bottom: 1px solid #8b8787;
}
</style>
