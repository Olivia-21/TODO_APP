<template>
  <LayOut :headText="headerText">
    <div class="buttons">
      <CardComponent
        v-for="item in todoList"
        :key="item"
        @toggle="showModal($event)"
        :todos="item"
      />
    </div>
    <div>
      <AddTaskModal v-if="isShowModal" :titles="title" />
    </div>
  </LayOut>
</template>

<script setup>
import LayOut from "../LayOut/LayOut.vue";
import CardComponent from "../components/CardComponent.vue";
import { ref } from "vue";
import AddTaskModal from "../components/Modals/AddTaskModal.vue";
import useTodos from "../Composable/api.js";
import { onMounted } from "vue";

const headerText = "TODO APP";
// const buttText = ref({ todo: " ", subtodo: " " });
let isShowModal = ref(false);

let title = ref("");

const showModal = (text) => {
  isShowModal.value = !isShowModal.value;
  title.value = "Add Task";

  if (text === "Edit") {
    title.value = "Edit Task";
  }
  console.log(text);
};

const { getTodoList, todoList } = useTodos();
onMounted(() => {
  getTodoList();
});
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
