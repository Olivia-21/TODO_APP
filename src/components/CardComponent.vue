<template>
  <div class="card">
    <div class="cards">
      <div>
        <h2>{{ todos.title }}</h2>
        <p>{{ todos.subtitle }}</p>
      </div>
      <div class="icons">
        <img :src="pencilIcon" @click="$emit('toggle', 'Edit')" />
        <img :src="deleteIcon" @click="$emit('toggle')" />
        <img
          :src="checkCircle"
          @click="bgColorChange"
          :class="bgColor ? 'blueBg' : 'defaultBg'"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import pencilIcon from "../assets/Pencil.png";
import deleteIcon from "../assets/Trash.png";
import checkCircle from "../assets/CheckCircle.png";
import { defineProps, ref } from "vue";

const bgColor = ref(false);

const bgColorChange = () => {
  bgColor.value = !bgColor.value;
};

defineProps({
  text: {
    type: Object,
  },
  todos: {
    type: Object,
  },
});
</script>

<style scoped>
.card {
  border-radius: 15px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 10px;
  width: 400px;
  height: 82px;
  flex-shrink: 0;
}

.cards {
  display: flex;
  justify-content: space-between;
}

h2 {
  text-transform: uppercase;
  color: #9395d3;
}
p {
  text-transform: capitalize;
}
</style>
