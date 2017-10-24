import React from 'react';
import { View } from 'react-native';

import DashBoard from './DashBoard';
import List from './List';

export default function Panel() {
  return (
    <View style={{ flex: 2 }}>
      <DashBoard />
      <List />
    </View>
  );
}
