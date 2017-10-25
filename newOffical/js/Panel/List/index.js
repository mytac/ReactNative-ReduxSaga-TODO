import React, { Component } from 'react';
import {
  Text, View, ScrollView, StyleSheet,
} from 'react-native';

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
    return (
      <ScrollView style={{ flex: 1, padding: 15 }}>
        <Text style={[text, title]}>Inbox</Text>
        <View>
          <ListItem />
        </View>
      </ScrollView>
    );
  }
}
