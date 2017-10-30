import React from 'react';
import { View, StyleSheet, Image, PixelRatio } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';

import LeftCol from './LeftCol';
import RightCol from './RightCol';

const url = require('../../../static/back.jpg');

const dpi = PixelRatio.get();

const styles = StyleSheet.create({
  mainStyle: {
    flex: 0.9,
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

export default function DashBoard({ personalNum, businessNum, ratio }) {
  return (
    <View style={styles.mainStyle}>
      <Image
        source={url}
        style={styles.backgroundStyle}
      >
        <View style={{ flexDirection: 'row', flex: 1 }}>
          <View style={styles.subStyle}><LeftCol /></View>
          <View style={styles.subStyle}>
            <RightCol
              personalNum={personalNum}
              businessNum={businessNum}
              ratio={ratio}
            />
          </View>
        </View>
        <LinearGradient
          colors={['#295cce', '#14b7e6', '#dddae4']}
          end={{ x: 1, y: 0 }}
          locations={[0, ratio * 0.01, 0]}
          style={{ height: 16 / dpi }}
        />
      </Image>
    </View>
  );
}

DashBoard.propTypes = {
  personalNum: PropTypes.number.isRequired,
  businessNum: PropTypes.number.isRequired,
  ratio: PropTypes.number.isRequired,
};
