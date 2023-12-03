<template>
  <button>
    <div class="buttcontent">
      <div class="content">
        <div>
          <h3>{{ text.todo }}</h3>
          <h5>{{ text.subtodo }}</h5>
        </div>
      </div>
      <div class="icons">
        <img :src="pencilIcon"  @click="$emit('toggle')" />
        <img :src="deleteIcon" @click="$emit('editModal')"/>
        <img :src="checkCircle" @click="bgColorChange" :class="bgColor ? 'blueBg' : 'defaultBg' "/>
      </div>
    </div>
  </button>
</template>

<script setup>
import pencilIcon from "../../assets/Pencil.png";
import deleteIcon from "../../assets/Trash.png";
import checkCircle from "../../assets/CheckCircle.png";
import { defineProps, ref} from "vue";

const bgColor = ref(false);

const bgColorChange = () =>{
  bgColor.value = !bgColor.value
}

defineProps({
  text: {
    type: Object,
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

img {
  margin: 8px;
  cursor: pointer;
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

.blueBg{
  background-color: #9395d3;
}
</style>
