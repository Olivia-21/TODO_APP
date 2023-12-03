<template >
  <div>
    <HeaderView :title=headText />
    <div class="main">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import HeaderView from "../components/Header/HeaderView.vue";
import {defineProps} from 'vue'
defineProps({
  headText:{
    type:String
  }
})
</script>

<style scoped>
.main {
  background-color: #d6d7ef;
  width: 100%;
  height: 70vh;
}
</style>
