<template>
  <div class="modal">
    <div class="color">
      <h2>{{ titles }}</h2>
      <slot></slot>
    </div>
    <div class="colors"></div>
    <InputField placeholder="Title" v-model="title" />
    <InputField placeholder="Details" v-model="details" />
    <div class="butt">
      <button @click="addOrUpdateItems">
        {{ titles === "Edit Task" ? "Update" : "Add" }}
      </button>
      <button v-if="titles === 'Edit Task'">Cancel</button>
    </div>
  </div>
</template>

<script setup>
// import LayOut from "../../LayOut/LayOut.vue";
import { defineProps, ref, watch } from "vue";
import useTodos from "@/Composable/api";

const { addTodo } = useTodos();
import InputField from "../FormView/InputField.vue";
const props = defineProps({
  isModal: {
    type: Boolean,
  },
  titles: {
    type: String,
  },
});

const title = ref("");
const details = ref("");

const addOrUpdateItems = () => {
  console.log(title.value);
  if (props.titles === "Add Task") {
    addTodo({ title: title.value, subtitle: details.value, completed: false });
  }
};

watch(title, (val) => {
  console.log(val);
});
</script>

<style scoped>
.modal {
  position: fixed;
  top: 18%;
  right: 30%;
  width: 50%;
  height: 70vh;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  background-color: white;
  border-radius: 6px;
}

.color {
  background-color: #9395d3;
  width: 100%;
  height: 15vh;
  top: 0;
}
h2 {
  text-transform: uppercase;
  color: #fff;
  font-family: "Josefin Sans", sans-serif;
  text-align: center;
  padding-top: 33px;
}

.butt {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
  padding: 10px;
}
button {
  cursor: pointer;
  padding: 5px;
  border: none;
  width: 30%;
  padding: 10px;
  font-size: large;
  background-color: #9395d3;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
  margin-right: 5px;
  border-radius: 6px;
  margin-top: 30px;
}
</style>
