import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Svg, { Circle } from 'react-native-svg';

const styles = StyleSheet.create({
  main: {

  },
  text: {
    color: '#fff',
    position: 'absolute',
    right: 35,
    top: 8,
    fontFamily: 'Never say never',
    fontSize: 18,
  },
  roundWrapper: {
    position: 'relative',
    left: 50,
    top: -15,
  },
});


export default function ProgressRound(props) {
  const { main, text, roundWrapper } = styles;
  const { ratio } = props; // 65 40
  return (
    <View style={main}>
      <View style={roundWrapper}>
        <Svg
          height="50"
          width="50"
        >
          <Circle
            cx="25"
            cy="25"
            r="20"
            stroke="#295cce"
            strokeWidth="5"
            fill="none"
          />
          <Circle
            cx="25"
            cy="25"
            r="20"
            stroke="#14b7e6"
            strokeWidth="5"
            fill="none"
            transform={{ matrix: '(0,-1,1,0,0,440)' }}
            strokeDasharray={[ratio * 1.25, 1049]}
          />

        </Svg>
      </View>
      <Text style={text}>{ratio}% done</Text>
    </View>
  );
}

ProgressRound.defaultProps = {
  ratio: 0,
};

ProgressRound.propTypes = {
  ratio: PropTypes.number.isRequired,
};
