import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import DashBoard from './DashBoard';
import List from './List';
import BottomBar from './BottomBar';

// 处理数组
const handleData = (data) => {
  const Len = data.length;
  const personalNum = data.filter(item => item.type && item.type === 'personal').length;
  const businessNum = data.length - personalNum;
  const completeNum = data.filter(item => item.isDone).length;
  const ratio = data && data.length > 0 ? parseInt(`${(completeNum / Len) * 100}`.substr(0, 3), 10) : 100;
  return { personalNum, businessNum, ratio, completeNum };
};

export default function Panel({ data, toggleEvent, delEvent }) {
  const { personalNum, businessNum, ratio, completeNum } = handleData(data);
  return (
    <View style={{ flex: 10 }}>
      <DashBoard personalNum={personalNum} businessNum={businessNum} ratio={ratio} />
      <List data={data} toggleEvent={toggleEvent} delEvent={delEvent} />
      <BottomBar completeNum={completeNum} />
    </View>
  );
}

Panel.propTypes = {
  data: PropTypes.array.isRequired,
  toggleEvent: PropTypes.func.isRequired,
  delEvent: PropTypes.func.isRequired,
};
