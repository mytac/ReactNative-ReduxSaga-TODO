import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { ADD_TODO, DEL_TODO, TOGGLE_TODO, FETCHING_TODO, FETCHING_TODO_SUCCESS, FETCHING_TODO_FAILURE } from '../actions';
import { AppNavigator } from '../route/AppNavigator';

const firstAction = AppNavigator.router.getActionForPathAndParams('App');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);

const initialState = AppNavigator.router.getStateForAction(firstAction, tempNavState);


/* 配置路由的reducer */
function navReducer(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case 'App':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state,
      );
      break;
    case 'Form':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Form' }),
        state,
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
}

// 删除todo
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

function todos(state = [], action) {
  switch (action.type) {
    case FETCHING_TODO:
      return state;
    case FETCHING_TODO_SUCCESS:
      return action.data;
    case FETCHING_TODO_FAILURE:
      return state;
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

/* 与其他reducer组合起来 */
const appReducer = combineReducers({
  nav: navReducer,
  todos,
});

export default appReducer;
