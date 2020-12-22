import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  TOGGLE_COMPLETE,
  CLEAR_TODO,
  FILTER_TASKS,
} from "./actions";
import todos from "./states";

let reducer = (state = todos, action) => {
  let newTodos;
  switch (action.type) {
    case CLEAR_TODO:
      newTodos = [...state];
      newTodos = [];
      return newTodos;

    case ADD_TODO:
      newTodos = [...state];
      newTodos.push(action.payload);
      return newTodos;

    case DELETE_TODO:
      newTodos = [...state];
      newTodos = newTodos.filter((todo) => todo.id != action.payload);
      return newTodos;

    case UPDATE_TODO:
      newTodos = [...state];
      let index = -1;
      for (let i = 0; i < newTodos.length; i++) {
        index++;
        if (newTodos[i].id == action.payload.id) {
          break;
        }
      }
      if (index != -1) {
        newTodos[index] = action.payload;
        return newTodos;
      }

    case TOGGLE_COMPLETE:
      newTodos = [...state];
      let arr = [];
      newTodos.forEach((element) => {
        console.log(element);
        if (element.id == action.payload) {
          element.isComplete = !element.isComplete;
        }
        arr.push(element);
      });
      /*    let ntodos = newTodos.map((el) => {
        if (el.id == action.payload) {
          el.isComplete = !el.isComplete;
        }
      }); */

      return arr;
    case FILTER_TASKS:
      newTodos = todos;
      console.log(action.payload);
      let nTodos = todos;
      state = todos;
      if (action.payload == "done") {
        nTodos = newTodos.filter((todo) => todo.isComplete == true);
      } else if (action.payload == "undone") {
        nTodos = newTodos.filter((todo) => todo.isComplete == false);
      } else {
        nTodos = todos;
      }
      return nTodos;
  }
  return state;
};

export default reducer;
