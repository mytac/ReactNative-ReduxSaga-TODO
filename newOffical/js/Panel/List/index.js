import React, { Component } from 'react';
import {
  Text, View, ScrollView, StyleSheet, PixelRatio, ListView,
} from 'react-native';
import PropTypes from 'prop-types';
import { SwipeListView } from 'react-native-swipe-list-view';

import ListItem from './ListItem';

const dpi = PixelRatio.get();

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Never say never',
  },
  title: {
    fontSize: 40 / dpi,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
});

export default class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { text, title, rowBack } = styles;
    const { data, toggleEvent } = this.props;
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    return (
      <ScrollView style={{ flex: 0.8, padding: 30 / dpi, backgroundColor: '#fff' }}>
        <Text style={[text, title]}>Inbox</Text>
        <SwipeListView
          dataSource={ds.cloneWithRows(data)}
          renderRow={(d, index) => (
            <ListItem
              item={d}
              key={index}
              toggleEvent={() => toggleEvent(index)}
            />
          )}
          renderHiddenRow={() => (
            <View>
              <Text>Left</Text>
              <Text>Right</Text>
            </View>
          )}
          leftOpenValue={0}
          rightOpenValue={-75}
        />
      </ScrollView>
    );
  }
}

Form.propTypes = {
  data: PropTypes.array.isRequired,
  toggleEvent: PropTypes.func.isRequired,
};

