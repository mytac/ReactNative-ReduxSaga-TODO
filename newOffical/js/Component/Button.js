import React, { Component } from 'react';
import {
  Text, View, TouchableOpacity, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { event, myStyle, outerStyle, Ele } = this.props;
    return (
      <TouchableOpacity onPress={event} style={outerStyle}>
        <View style={myStyle}>
          <Ele />
        </View>
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {
  event: PropTypes.func.isRequired,
  myStyle: PropTypes.number.isRequired,
  outerStyle: PropTypes.number.isRequired,
  Ele: PropTypes.object.isRequired,
};
