import { ref } from "vue";
import axios from "axios";
import { url } from "../Constant/url";

const useTodos = () => {
  const todoList = ref([]);
  const getTodoList = async () => {
    try {
      const res = await axios.get(url);
      todoList.value = res?.data;
      console.log(todoList.value);
    } catch (error) {
      console.log(error);
    }
  };

  const addTodo = async (data) => {
    try {
      await axios.post(url, data);
    } catch (error) {
      console.log(error);
    }
  };

  return { getTodoList, todoList, addTodo };
};

export default useTodos;
