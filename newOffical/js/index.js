import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';

import Panel from './Panel';
import MyBtn from './Component/Button';
import { addTodoAction, delTodoAction, toggleTodoAction, fetchTodoAction } from './actions';
import transferByDpi from './utils/transferByDpi';

const styles = StyleSheet.create(transferByDpi({
  roundBtnInner: {
    backgroundColor: 'rgb(63, 161, 239)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 90,
    width: 180,
    height: 180,
  },
  btnPosition: {
    position: 'absolute',
    bottom: 100,
    right: 100,
  },
}));

// 构造一个函数来分发action
/* , */

const mapDispatchToProps = dispatch => ({
  fetchTodo: (todo) => {
    dispatch(fetchTodoAction(todo));
  },
  addTodo: (todo) => {
    dispatch(addTodoAction(todo));
  },
  toggleTodo: (idx) => {
    dispatch(toggleTodoAction(idx));
  },
  deleteTask: (idx) => {
    dispatch(delTodoAction(idx));
  },
});

// 构造一个函数返回需要的state
const mapStateToProps = state => ({
  nav: state.nav,
  todos: state.todos,
});

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTodo();
  }

  render() {
    const { todos, deleteTask, navigation, toggleTodo, addTodo } = this.props;
    const { navigate } = navigation;
    return (
      <View style={{ flex: 1 }}>
        <Panel data={todos} toggleEvent={toggleTodo} delEvent={deleteTask} />
        <MyBtn
          event={() => navigate('Form', { event: addTodo })}
          myStyle={styles.roundBtnInner}
          outerStyle={styles.btnPosition}
          Ele={() => <Icon name="plus" size={transferByDpi(40)} color="#fff" />}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  navigation: PropTypes.object.isRequired,
  todos: PropTypes.array.isRequired,
  deleteTask: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  fetchTodo: PropTypes.func.isRequired,
};
