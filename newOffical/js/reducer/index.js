import { combineReducers } from 'redux';
import { ADD_TODO, DEL_TODO, TOGGLE_TODO } from '../actions';

// 标记完成/未完成事件
const deleteTodo = (state, action) => {
  const newData = [].concat(state);
  newData.splice(action.index, 1);
  return newData;
};

// 标记完成/未完成事件
const toggleTodo = (state, action) => state.map((item, index) => {
  if (parseInt(action.index, 10) === index) {
    return Object.assign({}, item, {
      isDone: !item.isDone,
    });
  }
  return item;
});

function todos(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.newTodo];
    case DEL_TODO:
      return deleteTodo(state, action);
    case TOGGLE_TODO:
      return toggleTodo(state, action);
    default:
      return state;
  }
}

export default todos;
