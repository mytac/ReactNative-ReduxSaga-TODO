import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import DigitSquare from './DigitSquare';
import ProgressRound from './ProgressRound';

const styles = StyleSheet.create({
  mainStyle: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    flex: 1,
  },
  wrapper: {
    marginTop: 130,
    flexDirection: 'row',
    paddingRight: 20,
  },
});

export default function RightCol({ personalNum, businessNum, ratio }) {
  const { mainStyle, wrapper } = styles;
  return (
    <View style={mainStyle}>
      <View style={wrapper}>
        <DigitSquare num={personalNum} type="Personal" />
        <DigitSquare num={businessNum} type="Business" />
      </View>
      <View>
        <ProgressRound ratio={ratio} />
      </View>
    </View>
  );
}

RightCol.propTypes = {
  personalNum: PropTypes.number.isRequired,
  businessNum: PropTypes.number.isRequired,
  ratio: PropTypes.number.isRequired,
};

