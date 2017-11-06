import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { ADD_TODO, DEL_TODO, TOGGLE_TODO } from '../actions';
import { AppNavigator } from '../route/AppNavigator';

const DATA = [
  { time: '10:21', isDone: true, title: 'xxxx', description: 'bla bla bla', type: 'personal' },
  { time: '10:22', isDone: true, title: 'xxxx', description: 'bla bla bla' },
  { time: '10:23', isDone: false, title: 'xxxx', description: 'bla bla bla', type: 'personal' },
  { time: '10:24', isDone: true, title: 'xxxx', description: 'bla bla bla' },
  { time: '10:24', isDone: false, title: 'xxxx', description: 'bla bla bla', type: 'personal' },
  { time: '10:24', isDone: true, title: 'xxxx', description: 'bla bla bla', type: 'personal' },
];


const firstAction = AppNavigator.router.getActionForPathAndParams('App');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('Form');

const initialState = AppNavigator.router.getStateForAction(secondAction, tempNavState);


/* 配置路由的reducer */
function nav(state = initialState, action) {
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


// 标记完成/未完成事件
const deleteTodo = (state, action) => {
  const newData = [].concat(state);
  newData.splice(action.index, 1);
  return newData;
}
;

// 标记完成/未完成事件
const toggleTodo = (state, action) => state.map((item, index) => {
  if (parseInt(action.index, 10) === index) {
    return Object.assign({}, item, {
      isDone: !item.isDone,
    });
  }
  return item;
},
);

function todos(state = DATA, action) {
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

/* 与其他reducer组合起来 */
const appReducer = combineReducers({
  nav,
  todos,
});

export default appReducer;
