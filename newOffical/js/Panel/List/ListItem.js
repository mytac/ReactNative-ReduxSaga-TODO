import React from 'react';
import {
  Text, View, StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  middle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    height: 100,
    borderBottomColor: '#e7dfdf',
    borderBottomWidth: 3,
    padding: 10,
    flexDirection: 'row',
  },
  checkBox: {
    borderWidth: 2,
    borderColor: '#2870a9',
    width: 50,
    height: 50,
    borderRadius: 10,

  },
  icon: {
  },

});

const ToggleBtn = ({ isCheck }) => (
  <View style={[styles.checkBox, styles.middle]}>
    <Icon name={isCheck ? 'check-circle-o' : 'circle-o'} size={28} color="#2870a9" style={styles.icon} />
  </View>

);

const TextRow = ({ texts, colors }) => (
  <View style={{ flex: 1 }}><Text color={colors}>{texts}</Text></View>
);

export default function ListItem() {
  const { wrapper } = styles;
  return (
    <View style={wrapper}>
      <View style={[{ flex: 0.8 }]}>
        <ToggleBtn />
      </View>
      <View style={{ flex: 3, flexDirection: 'column' }}>
        <TextRow texts={'Title'} colors={'#000'} />
        <TextRow texts={'Description'} colors={'#ddd'} />
      </View>
      <Text style={{ flex: 0.5 }}>ListItem</Text>
    </View>
  );
}

ToggleBtn.propTypes = {
  isCheck: PropTypes.bool.isRequired,
};

ToggleBtn.defaultPropTypes = {
  isCheck: false,
};
