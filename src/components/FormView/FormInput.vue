<template>
  <div class="form">
    <form action="">
      <InputField
        v-for="text in inputText"
        :key="text"
        :placeholder="text.placeholder"
      />
    </form>
  </div>
</template>

<script setup>
import InputField from "../../components/FormView/InputField.vue";
import { ref } from "vue";

const inputText = ref([{ placeholder: "Title" }, { placeholder: "Detail" }]);
</script>

<style scoped></style>
