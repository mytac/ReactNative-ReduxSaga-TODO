import React from 'react';
import {
  Text, View, StyleSheet,
} from 'react-native';

import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  main: {
    flex: 0.15,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  text: {
    fontFamily: 'Never say never',
  },
  row: {
    margin: 15,
  },
  badge: {
    backgroundColor: '#a1acb5',
    width: 25,
    height: 25,
    borderRadius: 12.5,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    left: -20,
    top: -2.5,
  },
});


export default function BottomBar({ completeNum }) {
  const { main, text, badge, row } = styles;

  return (
    <View style={main}>
      <View style={row}><Text style={[text]}>COMPLETED</Text></View>
      <View style={[badge, row]}><Text style={[text, { color: '#fff' }]}>{completeNum}</Text></View>
    </View>
  );
}

BottomBar.propTypes = {
  completeNum: PropTypes.number,
};

BottomBar.defaultProps = {
  completeNum: 0,
};
