import React from 'react';
import {
  Text, View, TouchableOpacity,
} from 'react-native';

import PropTypes from 'prop-types';
import styles from './style';

const TimerPanel = () => {
  const { timerPanel, titleM, titleL, fontNever } = styles;

  return (
    <View style={timerPanel}>
      <Text style={[fontNever, titleM]}>00:00:11</Text>
      <Text style={[fontNever, titleL]}>00:00:16</Text>
    </View>
  );
};

const Btn = ({ color, text }) => {
  const { btn, fontNever, btnText } = styles;
  return (
    <TouchableOpacity style={btn}>
      <Text style={[fontNever, btnText, { color }]}>{text}</Text>
    </TouchableOpacity>
  );
};

const BtnGroup = () => {
  const { btnGroup } = styles;
  return (
    <View style={btnGroup}>
      <Btn color="#000" text="COUNT" />
      <Btn color="red" text="STOP" />
    </View>
  );
};

const ListItem = ({ index, time }) => (
  <View style={[styles.listItem, { flexDirection: 'row' }]}>
    <Text style={[{ textAlign: 'left' }, styles.normalFont]}>计次{index}</Text>
    <Text style={[{ textAlign: 'right' }, styles.normalFont]}>{time}</Text>
  </View>
);

const List = () => {
  const { list } = styles;
  const arr = ['00:00:11', '00:00:11', '00:00:11'];
  return (
    <View style={list}>
      {arr.map((a, index) => <ListItem time={a} index={index} />)}
    </View>
  );
};

export default function Timer() {
  return (
    <View style={styles.timer}>
      <TimerPanel />
      <BtnGroup />
      <List />
    </View>
  );
}

Btn.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

ListItem.propTypes = {
  index: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
};
