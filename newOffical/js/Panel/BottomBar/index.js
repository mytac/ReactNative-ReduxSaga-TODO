import React from 'react';
import {
  Text, View, StyleSheet, PixelRatio,
} from 'react-native';

import PropTypes from 'prop-types';

const dpi = PixelRatio.get();
const styles = StyleSheet.create({
  main: {
    flex: 0.1,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  text: {
    fontFamily: 'Never say never',
    fontSize: 30 / dpi,
  },
  row: {
    margin: 30 / dpi,
  },
  badge: {
    backgroundColor: '#a1acb5',
    width: 50 / dpi,
    height: 50 / dpi,
    borderRadius: 25 / dpi,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    left: -40 / dpi,
    top: -5 / dpi,
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
