<template>
  <button>
    <div class="buttcontent">
      <div class="content">
        <div v-for="titles in texts" :key="titles">
          <h3>{{ titles.h3text }}</h3>
          <h5>{{ titles.h5text }}</h5>
        </div>
      </div>
      <div class="icons">
        <img :src="pencilIcon" alt="" />
        <img :src="deleteIcon" alt="" />
        <img :src="checkCircle" alt="" />
      </div>
    </div>
  </button>
</template>

<script setup>
import pencilIcon from "../../assets/Pencil.png";
import deleteIcon from "../../assets/Trash.png";
import checkCircle from "../../assets/CheckCircle.png";
import { defineProps } from "vue";

defineProps({
  texts: {
    type: Array,
  },
});
</script>

<style scoped>
button {
  border-radius: 15px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 10px;
  width: 400px;
  height: 82px;
  flex-shrink: 0;
}

.icons {
  /* margin-left: 240px; */
  /* background-color: red; */
}

img {
  margin: 8px;
}

.buttcontent {
  display: flex;
  justify-content: space-between;
}

.content {
  text-transform: uppercase;
}

h3 {
  margin-bottom: 8px;
  color: #9395d3;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 600px;
}
</style>
