import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import DashBoard from './DashBoard';
import List from './List';

export default function Panel({ data }) {
  return (
    <View style={{ flex: 2 }}>
      <DashBoard />
      <List data={data} />
    </View>
  );
}

Panel.propTypes = {
  data: PropTypes.array.isRequired,
};
