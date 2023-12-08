import { ref } from "vue";
import axios from "axios";
import { url } from "../Constant/url.js";
// import { delUrl } from "../Constant/url.js";

const useTodos = () => {
  const todoList = ref([]);
  const getTodoList = async () => {
    try {
      const res = await axios.get(url);
      todoList.value = res?.data;
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

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      const updatedList = todoList.value.filter((item) => item.id !== id);
      todoList.value = updatedList;
      console.log(updatedList);
      // todoList.value = todoList.value.filter((todo) => todo.id !== id);
    } catch (error) {
      console.log(error);
    }
  };

  return { getTodoList, todoList, addTodo, deleteTodo };
};

export default useTodos;
