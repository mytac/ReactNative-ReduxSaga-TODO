import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import configs from './configs';
import { addTodo, delTodo, toggleTodo } from '../actions';

export const AppNavigator = StackNavigator(configs);

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

// 构造一个函数来分发action
const mapDispatchToProps = dispatch => ({
  addTodo: (todo) => {
    dispatch(addTodo(todo));
  },
  toggleTodo: (idx) => {
    dispatch(toggleTodo(idx));
  },
  deleteTask: (idx) => {
    dispatch(delTodo(idx));
  },
});

// 构造一个函数返回需要的state
const mapStateToProps = state => ({
  nav: state.nav,
  todos: state.todos,
});

export default connect(mapDispatchToProps, mapStateToProps)(AppWithNavigationState);
