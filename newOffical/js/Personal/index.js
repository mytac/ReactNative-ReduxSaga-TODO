import React from 'react';
import {
  Text, View, ScrollView, Dimensions,
} from 'react-native';
import Swiper from 'react-native-swiper';

import PropTypes from 'prop-types';

import styles from './style';

// 模拟渲染grid中的数组
const tempGridArray = Array(25).fill(1);

const Gallery = () => (
  <Swiper style={styles.wrapper} autoplay showsPagination={false}>
    <View style={styles.slide1}>
      <Text style={styles.text}>Hello Swiper</Text>
    </View>
    <View style={styles.slide2}>
      <Text style={styles.text}>Beautiful</Text>
    </View>
    <View style={styles.slide3}>
      <Text style={styles.text}>And simple</Text>
    </View>
  </Swiper>
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

