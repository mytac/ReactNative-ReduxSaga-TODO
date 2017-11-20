import React from 'react';
import {
  Text, View, TouchableOpacity,
} from 'react-native';

import PropTypes from 'prop-types';
import styles from './style';

const TimerPanel = ({ divideTime, totalTime }) => {
  const { timerPanel, titleM, titleL, fontNever } = styles;

  return (
    <View style={timerPanel}>
      <Text style={[fontNever, titleM]}>{'00:00:11'}</Text>
      <Text style={[fontNever, titleL]}>{'00:00:00'}</Text>
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

const List = () => {
  const { list } = styles;
  const arr = ['00:00:11', '00:00:11', '00:00:11'];
  return (
    <View style={list}>
      {arr.map((a, index) => <ListItem time={a} index={index} />)}
    </View>
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
      console.log('end');
      // clearInterval(this.interval);
    } else {
      // 开始计时状态
      this.setState({
        isStart: true,
        rBtnText: 'STOP',
        lBtnText: 'COUNT',
      });
      console.log('计时中');
      /* this.interval = setInterval(
        () => {
          this.setState({
            // currentTime: (new Date()).getTime(),
            totalTime: (new Date()).getTime(),
          });
        },
        10,
      ); */
    }
  }
  count() {
    const { isStart } = this.state;
    if (!isStart) {
      // 复位状态
      console.log('reset');
    } else {
      // 计时状态
      console.log('count');
    }
  }

  render() {
    const { divideTime, totalTime, rBtnText, lBtnText } = this.state;
    return (
      <View style={styles.timer}>
        <TimerPanel divideTime={divideTime} totalTime={totalTime} />
        <BtnGroup
          startEvent={this.start}
          resetEvent={this.count}
          name1={lBtnText}
          name2={rBtnText}
        />
        <List />
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
