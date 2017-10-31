import React, { Component } from 'react';
import {
  Button, AppRegistry, Text, TextInput, View, ScrollView, FlatList, SectionList, Image, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Form from './js/Form';
import Panel from './js/Panel';
import MyBtn from './js/Component/Button';

import transferByDpi from './js/utils/transferByDpi';

const data = [
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
      newData: data,
    };
    this.toggleComplete = this.toggleComplete.bind(this);
  }

  toggleComplete(choseIdx) {
    const newData = this.state.newData.map((item, index) => {
      if (choseIdx === index) {
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


  render() {
    const { navigate } = this.props.navigation;
    const { newData } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Panel data={newData} toggleEvent={this.toggleComplete} />
        <MyBtn
          event={() => navigate('Form')}
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
