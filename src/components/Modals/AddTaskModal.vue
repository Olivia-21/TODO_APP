<template>
    <div class="modal" >
      <div class="color">
        <h2>{{title}}</h2>
        <slot></slot>
      </div>
      <div class="colors"></div>
      <FormInput />
      <div class="butt">
      <button  @click="$emit('inputText')">Confirm</button>
      <button>Exit</button>
    </div>
    </div>
</template>

<script setup>
// import LayOut from "../../LayOut/LayOut.vue";
import {defineProps} from 'vue'
import FormInput from '../FormView/FormInput.vue';



defineProps({
  isModal:{
    type:Boolean
  },
  title:{
    type:String
  }
})


</script>

<style scoped>
.modal {
  position: fixed;
  top: 30%;
  right: 15%;
  width: 20%;
  height: 50%;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  background-color: white;
  border-radius: 6px;
}

.color{
  background-color: #9395d3;
  width: 100%;
  height: 15vh;
  top: 0;
  
  
}
h2{
  text-transform: uppercase;
  color: #fff;
  font-family: "Josefin Sans", sans-serif;
  text-align: center;
  padding-top: 33px;
 }

 .butt{
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
  padding: 10px;
 }
button{
  cursor: pointer;
  padding: 5px;
  border: none;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
  margin-right: 5px;

}
</style>
