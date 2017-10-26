import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import DashBoard from './DashBoard';
import List from './List';
import BottomBar from './BottomBar';

export default function Panel({ data }) {
  return (
    <View style={{ flex: 10 }}>
      <DashBoard />
      <List data={data} />
      <BottomBar />
    </View>
  );
}

Panel.propTypes = {
  data: PropTypes.array.isRequired,
};
