import React from 'react';
import { Text, View, StyleSheet, PixelRatio } from 'react-native';
import PropTypes from 'prop-types';
import Svg, { Circle } from 'react-native-svg';

const dpi = PixelRatio.get();
const styles = StyleSheet.create({
  main: {

  },
  text: {
    color: '#fff',
    position: 'absolute',
    right: 70 / dpi,
    top: 16 / dpi,
    fontFamily: 'Never say never',
    fontSize: 36 / dpi,
  },
  roundWrapper: {
    position: 'relative',
    left: 100 / dpi,
    top: -10 / dpi,
  },
});


export default function ProgressRound(props) {
  const { main, text, roundWrapper } = styles;
  const { ratio } = props; // 65 40
  return (
    <View style={main}>
      <View style={roundWrapper}>
        <Svg
          height={100 / dpi}
          width={100 / dpi}
        >
          <Circle
            cx={50 / dpi}
            cy={50 / dpi}
            r={40 / dpi}
            stroke="#295cce"
            strokeWidth={10 / dpi}
            fill="none"
          />
          <Circle
            cx={50 / dpi}
            cy={50 / dpi}
            r={40 / dpi}
            stroke="#14b7e6"
            strokeWidth={10 / dpi}
            fill="none"
            transform={{ matrix: '(0,-1,1,0,0,440)' }}
            strokeDasharray={[ratio * (2.55 / dpi), 1049]}
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
