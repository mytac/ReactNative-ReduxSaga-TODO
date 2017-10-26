import React, { Component } from 'react';
import {
  Text, View, ScrollView, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import ListItem from './ListItem';

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Never say never',
  },
  title: {
    fontSize: 20,
  },
});

export default class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { text, title } = styles;
    const { data } = this.props;
    return (
      <ScrollView style={{ flex: 0.8, padding: 15, backgroundColor: '#fff' }}>
        <Text style={[text, title]}>Inbox</Text>
        <View>
          {data.map((item, index) => (<ListItem item={item} key={index} />))}
        </View>
      </ScrollView>
    );
  }
}

Form.propTypes = {
  data: PropTypes.array.isRequired,
};
