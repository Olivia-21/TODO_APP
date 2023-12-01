<template>
  <LayOut H1text="Add Task">
    <div class="modal">
      <div class="modal-content">
        <FormInput />
      </div>
    </div>
  </LayOut>
</template>

<script setup>
import LayOut from "../../LayOut/LayOut.vue";
import FormInput from "../../components/FormView/FormInput.vue";

defineProps({
  modalShow: {
    type: Boolean,
  },
});
// import backIcon from "../../assets/BackIcon.png";
</script>

<style scoped>
.modal {
  position: fixed;
  top: 30%;
  left: 30%;
  width: 100%;
  height: 100%;
}
</style>
