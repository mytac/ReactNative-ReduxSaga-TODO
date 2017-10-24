import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import LeftCol from './LeftCol';
import RightCol from './RightCol';

const url = require('../../../static/back.jpg');

const styles = StyleSheet.create({
  mainStyle: {
    flex: 0.7,
  },
  backgroundStyle: {
    resizeMode: 'cover',
    width: null,
    height: '100%',
  },
  subStyle: {
    flex: 1,
  },
  rightColStyle: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    flex: 1,
  },
});

export default function Form() {
  return (
    <View style={styles.mainStyle}>
      <Image
        source={url}
        style={styles.backgroundStyle}
      >
        <View style={{ flexDirection: 'row', flex: 1 }}>
          <View style={styles.subStyle}><LeftCol /></View>
          <View style={styles.subStyle}><RightCol /></View>
        </View>
        <View style={{ height: 5, backgroundColor: 'pink' }} />
      </Image>
    </View>
  );
}
