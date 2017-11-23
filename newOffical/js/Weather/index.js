import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
import transferByDpi from '../utils/transferByDpi';

import PropTypes from 'prop-types';

import styles from './style';
import mockData from './mockData';

const weatherIconObj = {
  1: 'sun-o',
  2: 'snowflake-o',
  3: 'cloud',
};

export default function Weather() {
  const { panel, white,
    smFontSize, midFontSize, lFontSize,
    pageStyle, blockStyle, xsFont, listItemStyle, listStyle } = styles;

  const Panel = ({ city, desc, temperature }) => (
    <View style={panel}>
      <Text style={[midFontSize, white]}>{city}</Text>
      <Text style={[smFontSize, white]}>{desc}</Text>
      <Text style={[lFontSize, white]}>{temperature}℃</Text>
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

  const ListItem = ({ day, type, min, max }) => (
    <View style={listItemStyle}>
      <Text style={[white, xsFont]}>{day}</Text>
      <Icon
        name={weatherIconObj[type]}
        size={transferByDpi(45)}
        color="#fff"
      />
      <Text style={[white, xsFont]}>{min}  {max}</Text>
    </View>
  );

  const List = ({ data }) => (
    <ScrollView style={[{ flex: 3 }, listStyle]}>
      {data.map(obj => <ListItem {...obj} />)}
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

  const Page = ({ place, now, data }) => (
    <View style={[pageStyle, { flex: 1 }]}>
      <Panel city={place} {...now} />
      <HorizontalScrollRow />
      <List data={data} />
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <Swiper style={styles.wrapper} showsPagination dotColor="#fff" activeDotColor="#787d82">
        {mockData.map(obj => <Page {...obj} />)}
      </Swiper>
    </View>

  );
}
