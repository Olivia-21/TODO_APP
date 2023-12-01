<template>
  <div>
    <HeaderView H1text="TODO APP" />
    <div class="main">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import HeaderView from "../components/Header/HeaderView.vue";
</script>

<style scoped>
.main {
  background-color: #d6d7ef;
  width: 100%;
  height: 70vh;
}
</style>
