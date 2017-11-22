import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
import transferByDpi from '../utils/transferByDpi';

import PropTypes from 'prop-types';

import styles from './style';

const weatherIconObj = {
  1: 'sun-o',
  2: 'snowflake-o',
  3: 'cloud',
};

export default function Weather() {
  const { panel, white, smFontSize, midFontSize, lFontSize, pageStyle, blockStyle, xsFont } = styles;
  const Panel = () => (
    <View style={panel}>
      <Text style={[midFontSize, white]}>北京</Text>
      <Text style={[smFontSize, white]}>大部晴朗</Text>
      <Text style={[lFontSize, white]}>5℃</Text>
    </View>);

  const SquareBlock = ({ index, type, num }) => (
    <View style={blockStyle}>
      <Text style={[{ color: '#fff' }, xsFont]}>{index}时</Text>
      <Icon
        name={weatherIconObj[type]}
        size={transferByDpi(45)}
        color="#fff"
      />
      <Text style={[{ color: '#fff' }, xsFont]}>{num}℃</Text>
    </View>
  );

  const List = () => (
    <ScrollView style={{ flex: 3 }}>
      <Text>list</Text>
      <Text>list</Text>
      <Text>list</Text>
      <Text>list</Text>
      <Text>list</Text>
      <Text>list</Text>
      <Text>list</Text>
      <Text>list</Text>
      <Text>list</Text>
      <Text>list</Text>
      <Text>list</Text>
      <Text>list</Text>
      <Text>list</Text>
      <Text>list</Text>
      <Text>list</Text>
      <Text>list</Text>
      <Text>list</Text>
      <Text>list</Text>
      <Text>list</Text>
      <Text>list</Text>
      <Text>list</Text>
      <Text>list</Text>
      <Text>list</Text>
      <Text>list</Text>
      <Text>list</Text>
      <Text>list</Text>
      <Text>list</Text>
      <Text>list</Text>
      <Text>list</Text>
      <Text>list</Text>
      <Text>list</Text>
      <Text>list</Text>
      <Text>list</Text>
      <Text>list</Text>
      <Text>list</Text>
    </ScrollView>
  );

  const HorizontalScrollRow = () => {
    const arr = Array(24).fill({ type: 1, num: 20 });
    return (
      <View style={{ flex: 0.3 }}>
        <ScrollView horizontal>
          {arr.map((obj, index) => <SquareBlock index={index} type={obj.type} num={obj.num} />)}
        </ScrollView>
      </View>

    );
  };

  const Page = () => (
    <View style={[pageStyle, { flex: 1 }]}>
      <Panel />
      <HorizontalScrollRow />
      <List />
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <Swiper style={styles.wrapper} showsPagination>
        <Page />
        <Page />
      </Swiper>
    </View>

  );
}
