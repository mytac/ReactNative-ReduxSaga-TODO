import React, { Component } from 'react';
import {
  Text, View, ScrollView, StyleSheet, PixelRatio,
} from 'react-native';
import PropTypes from 'prop-types';

import ListItem from './ListItem';

const dpi = PixelRatio.get();

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Never say never',
  },
  title: {
    fontSize: 40 / dpi,
  },
});

export default class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { text, title } = styles;
    const { data, toggleEvent } = this.props;
    return (
      <ScrollView style={{ flex: 0.8, padding: 30 / dpi, backgroundColor: '#fff' }}>
        <Text style={[text, title]}>Inbox</Text>
        <View>
          {data.map((item, index) => (<ListItem
            item={item}
            key={index}
            toggleEvent={() => toggleEvent(index)}
          />))}
        </View>
      </ScrollView>
    );
  }
}

Form.propTypes = {
  data: PropTypes.array.isRequired,
  toggleEvent: PropTypes.func.isRequired,
};
