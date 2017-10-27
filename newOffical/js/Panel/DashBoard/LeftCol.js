import React, { Component } from 'react';
import {
  Text, View, StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  rightColStyle: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    flex: 1,
  },
  wrapper: {
    position: 'relative',
    left: 30,
    top: 80,
  },
  whiteFont: {
    color: '#fff',
    fontFamily: 'PlazaDReg',
  },
  title: {
    fontSize: 65,
  },
  date: {
    fontSize: 25,
    marginTop: 30,
  },
});

export default class LeftCol extends React.Component {
  constructor(props) {
    super(props);
  }

  static getLocalTime() {
    const date = new Date();
    return date.toLocaleDateString().split('/').join(' - ');
  }

  render() {
    const { mainStyle, wrapper, title, whiteFont, date } = styles;
    return (
      <View style={mainStyle}>
        <View style={wrapper}>
          <View>
            <Text style={[whiteFont, title]}>TODO</Text>
            <Text style={[whiteFont, title]}>THINGS</Text>
          </View>
          <View>
            <Text style={[whiteFont, date]}>{LeftCol.getLocalTime()}</Text>
          </View>
        </View>
      </View>
    );
  }
}
