import React from 'react';
import {
  Text, View, TouchableOpacity,ScrollView
} from 'react-native';

import PropTypes from 'prop-types';
import formatNum from '../utils/formatNum';

import styles from './style';


const TimerPanel = ({ divideTime, totalTime }) => {
  const { timerPanel, titleM, titleL, fontPlaze } = styles;

  return (
    <View style={timerPanel}>
      <Text style={[fontPlaze, titleM]}>{divideTime}</Text>
      <Text style={[fontPlaze, titleL]}>{totalTime}</Text>
    </View>
  );
};

const Btn = ({ color, text, event }) => {
  const { btn, fontNever, btnText } = styles;
  return (
    <TouchableOpacity
      style={btn}
      onPress={event}
    >
      <Text style={[fontNever, btnText, { color }]}>{text}</Text>
    </TouchableOpacity>
  );
};

const BtnGroup = ({ name1, name2, startEvent, resetEvent }) => {
  const { btnGroup } = styles;
  const colorScheme = {
    START: 'green',
    STOP: 'red',
  };
  return (
    <View style={btnGroup}>
      <Btn color="#000" text={name1} event={resetEvent} />
      <Btn color={colorScheme[name2]} text={name2} event={startEvent} />
    </View>
  );
};

const ListItem = ({ index, time }) => (
  <View style={[styles.listItem, { flexDirection: 'row' }]}>
    <Text style={[{ textAlign: 'left' }, styles.normalFont]}>计次{index}</Text>
    <Text style={[{ textAlign: 'right' }, styles.normalFont]}>{time}</Text>
  </View>
);

const List = (props) => {
  const { list } = styles;
  return (
    <ScrollView style={list}>
      {props.list.map((a, index) => <ListItem time={a} index={index} />)}
    </ScrollView>
  );
};

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.interval = null;
    this.state = {
      rBtnText: 'START',
      lBtnText: 'COUNT',
      divideTime: '00:00:00',
      totalTime: '00:00:05',
      isStart: false,
      isReset: false,
      list: [],
    };
    this.start = this.start.bind(this);
    this.count = this.count.bind(this);
  }

  start() {
    const { isStart, isReset } = this.state;
    if (isStart) {
      // 暂停计时状态
      this.setState({
        isStart: false,
        rBtnText: 'START',
        lBtnText: 'RESET',
        isReset: false,
      });
      clearInterval(this.interval);
      // 清空初始时间
      this.initTime = null;
    } else {
      // 点击start时，获取初始时间
      if (!this.initTime) {
        this.initTime = (new Date()).getTime();
      }
      // 开始计时状态
      this.setState({
        isStart: true,
        rBtnText: 'STOP',
        lBtnText: 'COUNT',
      });
      this.interval = setInterval(
        () => {
          const currentTime = (new Date()).getTime();
          const countingTime = currentTime - this.initTime;
          const minute = formatNum(countingTime / (60 * 1000));
          const senconds = formatNum((countingTime - (minute * 60000)) / 1000);
          const millSeconds = formatNum((countingTime % 1000) / 10);
          this.setState({
            totalTime: `${minute}:${senconds}:${millSeconds}`,
          });
        },
        50,
      );
    }
  }
  count() {
    const { isStart, totalTime } = this.state;
    if (!isStart) {
      // 复位状态
      this.initTime = null;
      this.setState({
        totalTime: '00:00:00',
        list: [],
      });
    } else {
      // 计时状态
      this.setState({
        list: [...this.state.list, totalTime],
      });
    }
  }

  render() {
    const { divideTime, totalTime, rBtnText, lBtnText, list } = this.state;
    return (
      <View style={styles.timer}>
        <TimerPanel divideTime={divideTime} totalTime={totalTime} />
        <BtnGroup
          startEvent={this.start}
          resetEvent={this.count}
          name1={lBtnText}
          name2={rBtnText}
        />
        <List list={list} />
      </View>
    );
  }
}

TimerPanel.propTypes = {
  divideTime: PropTypes.string.isRequired,
  totalTime: PropTypes.string.isRequired,
};
BtnGroup.propTypes = {
  name1: PropTypes.string,
  name2: PropTypes.string,
};

Btn.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

ListItem.propTypes = {
  index: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
};

BtnGroup.defaultProps = {
  name1: 'COUNT',
  name2: 'START',
};
