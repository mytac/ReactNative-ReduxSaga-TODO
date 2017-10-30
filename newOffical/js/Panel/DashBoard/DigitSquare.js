import React from 'react';
import {
  Text, View, StyleSheet, PixelRatio,
} from 'react-native';
import PropTypes from 'prop-types';

const dpi = PixelRatio.get();

const styles = StyleSheet.create({
  main: {
    flex: 1,
    height: 240 / dpi,
    padding: 45 / dpi,
  },
  plazaFont: {
    fontFamily: 'Never say never',
  },
  text: {
    fontSize: 40 / dpi,
    flex: 1,
    textAlign: 'right',
    color: '#fff',
  },
});

export default function DigitSquare(props) {
  const { main, text, plazaFont } = styles;
  const { num, type } = props;
  return (
    <View style={main}>
      <Text style={[text, plazaFont]}>{num}</Text>
      <Text style={[text, plazaFont]}>{type}</Text>
    </View>
  );
}

DigitSquare.propTypes = {
  num: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

DigitSquare.defaultProps = {
  num: 0,
  type: 'Personal',
};
