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
    <div class="Ellipse" @click="showModal">
      <img :src="plusIcon" alt="" />
    </div>
  </LayOut>
</template>

<script setup>
import LayOut from "../LayOut/LayOut.vue";
import CardComponent from "../components/CardComponent.vue";
import { ref } from "vue";
import AddTaskModal from "../components/Modals/AddTaskModal.vue";
import useTodos from "../Composable/api.js";
// import Ellipse from "../assets/Ellipse.png";
import plusIcon from "../assets/plus.png";
import { onMounted } from "vue";

const headerText = "TODO APP";
let isShowModal = ref(false);

let title = ref("");

const showModal = (text) => {
  isShowModal.value = true;
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

.Ellipse {
  width: 70px;
  height: 70px;
  flex-shrink: 0;
  background-color: #9395d3;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 0;
  top: 70%;
  margin-right: 230px;
  cursor: pointer;
}
</style>
