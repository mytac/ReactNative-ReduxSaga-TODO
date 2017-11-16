import React from 'react';
import {
  Text, View, ScrollView, Dimensions, TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import transferByDpi from '../utils/transferByDpi';

import styles from './style';
import dataSource from './dataSource';


// 获取屏幕的宽度，用来渲染grid宽度
const { width } = Dimensions.get('window');

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


const Grid = (props) => {
  const { iconName, keyId, title, color, routeName, navigation } = props;
  return (
    <TouchableOpacity
      onPress={() => { navigation.navigate(routeName); }}
      style={[styles.grid, { width: width / 3, height: width / 3 }]}
    >
      <View style={styles.gridInner}>
        <Icon
          name={iconName}
          size={transferByDpi(50)}
          color={color}
        />
        <Text>{title}</Text>
        <Text>Day{keyId}</Text>
      </View>
    </TouchableOpacity>
  );
};

const GridWrapper = props => (
  <View style={styles.gridWrapper}>
    {dataSource.map(obj => <Grid {...obj} key={obj} {...props} />)}
  </View>
);


export default function FirstPage(props) {
  return (
    <ScrollView>
      <Gallery />
      <GridWrapper {...props} />
    </ScrollView>
  );
}

Grid.propTypes = {
  iconName: PropTypes.string.isRequired,
  keyId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  routeName: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
};

