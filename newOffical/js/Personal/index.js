import React from 'react';
import {
  Text, View, StyleSheet, ScrollView, Dimensions,
} from 'react-native';

import PropTypes from 'prop-types';

import transferByDpi from '../utils/transferByDpi';

// 模拟渲染grid中的数组
const tempGridArray = Array(25).fill(1);


const Gallery = () => (
  <View>
    <Text>galley</Text>
  </View>
);

const Grid = () => {
  const { width } = Dimensions.get('window');
  return (
    <View style={[styles.grid, { width: width / 3, height: width / 3 }]}>
      <View style={styles.gridInner}>
        <Text>Grid</Text>
      </View>
    </View>
  );
};

const GridWrapper = () => (
  <View style={styles.gridWrapper}>
    {tempGridArray.map(a => <Grid />)}
  </View>
);


export default function FirstPage() {
  return (
    <ScrollView>
      <Gallery />
      <GridWrapper />
    </ScrollView>
  );
}

const styles = StyleSheet.create(transferByDpi({
  gridWrapper: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderTopWidth: 3,
    borderTopColor: '#ddd',
  },
  grid: {
    backgroundColor: '#ddd',
    paddingRight: 3,
    paddingBottom: 3,
  },
  gridInner: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
