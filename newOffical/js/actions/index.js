// action types
export const ADD_TODO = 'ADD_TODO';
export const DEL_TODO = 'DEL_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export function addTodo(newTodo) {
  return { type: ADD_TODO, newTodo };
}

export function delTodo(index) {
  return { type: DEL_TODO, index };
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index };
}
