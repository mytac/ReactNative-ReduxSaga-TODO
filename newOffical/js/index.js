import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import PropTypes from 'prop-types';

import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Form from './Form';
import Panel from './Panel';
import MyBtn from './Component/Button';

import transferByDpi from './utils/transferByDpi';

const DATA = [
  { time: '10:21', isDone: true, title: 'xxxx', description: 'bla bla bla', type: 'personal' },
  { time: '10:22', isDone: true, title: 'xxxx', description: 'bla bla bla' },
  { time: '10:23', isDone: false, title: 'xxxx', description: 'bla bla bla', type: 'personal' },
  { time: '10:24', isDone: true, title: 'xxxx', description: 'bla bla bla' },
  { time: '10:24', isDone: false, title: 'xxxx', description: 'bla bla bla', type: 'personal' },
  { time: '10:24', isDone: true, title: 'xxxx', description: 'bla bla bla', type: 'personal' },
];

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newData: DATA || [],
    };
    this.toggleComplete = this.toggleComplete.bind(this);
    this.addData = this.addData.bind(this);
    this.deleteData = this.deleteData.bind(this);
  }

  // 标记完成/未完成事件
  toggleComplete(choseIdx) {
    const newData = this.state.newData.map((item, index) => {
      if (parseInt(choseIdx, 10) === index) {
        return Object.assign({}, item, {
          isDone: !item.isDone,
        });
      }
      return item;
    });

    this.setState({
      newData,
    });
  }

  // 添加todo事件
  addData(addData) {
    const { newData } = this.state;
    if (addData) {
      const addedData = [].concat(newData);
      if (addData) {
        addedData.push(addData);
        this.setState({
          newData: addedData,
        });
      }
    }
  }

  // 标记完成/未完成事件
  deleteData(choseIdx) {
    const newData = [].concat(this.state.newData);
    newData.splice(choseIdx, 1);
    this.setState({
      newData,
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    const { newData } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <Panel data={newData} toggleEvent={this.toggleComplete} delEvent={this.deleteData} />
        <MyBtn
          event={() => navigate('Form', { event: this.addData })}
          myStyle={styles.roundBtnInner}
          outerStyle={styles.btnPosition}
          Ele={() => <Icon name="plus" size={transferByDpi(40)} color="#fff" />}
        />
      </View>
    );
  }
}

export default StackNavigator({
  App: {
    screen: App,
    navigationOptions: {
      header: null,
    },
  },
  Form: {
    screen: Form,
    navigationOptions: {
      header: null,
    },
  },
});

App.propTypes = {
  navigation: PropTypes.object.isRequired,
};
