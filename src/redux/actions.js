export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
export const Done_list = "Done_list";
export const FILTER_TASKS = "FILTER_TASKS";
export const CLEAR_TODO = "CLEAR_TODO";



export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo,
  };
}

export function deleteTodo(todoId) {
  return {
    type: DELETE_TODO,
    payload: todoId,
  };
}

export function updateTodo(todo) {
  return {
    type: UPDATE_TODO,
    payload: todo,
  };
}
export function filterTask(str) {
  return {
    type: FILTER_TASKS,
    payload: str,
  };
}
export function toggleComplete(todoId) {
  return {
    type: TOGGLE_COMPLETE,
    payload: todoId,
  };
}
export function donelist() {
  return {
    type: Done_list,
  };
}