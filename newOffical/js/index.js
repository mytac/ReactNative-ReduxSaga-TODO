import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';

import Panel from './Panel';
import MyBtn from './Component/Button';
import { addTodo, delTodo, toggleTodo } from './actions';
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

class App extends Component {
  constructor(props) {
    super(props);
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
};
