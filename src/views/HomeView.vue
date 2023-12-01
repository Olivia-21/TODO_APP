<template>
  <LayOut>
    <div class="buttons">
      <ButtonView :texts="title" />
      <ButtonView :texts="title" />
      <ButtonView :texts="title" />
      <ButtonView :texts="title" />
      <!-- <ButtonView />
      <ButtonView />
      <ButtonView /> -->
      <!-- <AddTaskModal /> -->

      <AddTaskModal />
    </div>
  </LayOut>
</template>

<script setup>
import LayOut from "../LayOut/LayOut.vue";
import ButtonView from "../components/Buttons/ButtonView.vue";
import { ref } from "vue";
import AddTaskModal from "../components/Modals/AddTaskModal.vue";
// import AddTaskModal from '../components/Modals/AddTaskModal.vue'

const title = ref([{ h3text: "Todo Title" }, { h5text: "todo sub title" }]);
</script>

<style scoped>
.buttons {
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
}
</style>
