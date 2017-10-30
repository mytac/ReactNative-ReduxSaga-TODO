import React, { Component } from 'react';
import {
  Text, View, StyleSheet, PixelRatio,
} from 'react-native';

// 屏幕适配
const dpi = PixelRatio.get();

const styles = StyleSheet.create({
  rightColStyle: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    flex: 1,
  },
  wrapper: {
    position: 'relative',
    left: 75 / dpi,
    top: 225 / dpi,
  },
  whiteFont: {
    color: '#fff',
    fontFamily: 'PlazaDReg',
  },
  title: {
    fontSize: 120 / dpi,
  },
  date: {
    fontSize: 54 / dpi,
    marginTop: 75 / dpi,
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
