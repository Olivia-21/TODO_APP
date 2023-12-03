<template>
  <LayOut :headText=headerText >
    <div class="buttons">
      <ButtonView v-for="item in buttIcon" :key="item" :text= buttText @toggle=showModal @editModal="showEditModal" />
    </div>
    <div><AddTaskModal v-if="isShowModal" title="Add Task" @inputText="updateText" /></div>
    <div><EditTaskModal v-if="isEditModal" @input-Text="updateText"/></div>
  </LayOut>
</template>

<script setup>
import LayOut from "../LayOut/LayOut.vue";
import ButtonView from "../components/Buttons/ButtonView.vue";
import { ref } from "vue";
import AddTaskModal from '../components/Modals/AddTaskModal.vue'
import EditTaskModal from "@/components/EditTaskModal.vue";



const buttIcon = ref(['pencilIcon','deleteIcon','checkCircle', 'texts'])
const headerText = 'TODO APP';
const buttText = ref({todo: 'todo title', subtodo:'sub todo title'})
 let isShowModal = ref(false);
 let isEditModal = ref(false);

 const showModal = ()=>{
  isShowModal.value = !isShowModal.value;
 }
 const showEditModal = ()=>{
  isEditModal.value = ! isEditModal.value;
 }

 const updateText = (newText) =>{
buttText.value.todo = newText,
buttText.value.subtodo = newText
 }


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
