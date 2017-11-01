import React from 'react';
import {
  Text, View, StyleSheet, PixelRatio,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import Button from '../../Component/Button';

const dpi = PixelRatio.get();
const styles = StyleSheet.create({
  middle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    height: 200 / dpi,
    borderBottomColor: '#ddd',
    borderBottomWidth: 4 / dpi,
    padding: 20 / dpi,
    flexDirection: 'row',
    position: 'relative',
    zIndex: 10,
  },
  checkBox: {
    borderWidth: 4 / dpi,
    borderColor: '#2870a9',
    width: 100 / dpi,
    height: 100 / dpi,
    borderRadius: 20 / dpi,
    marginTop: 20 / dpi,
  },
  icon: {
  },

});

const ToggleBtn = ({ isCheck }) => (
  <View style={[styles.checkBox, styles.middle]}>
    <Icon name={isCheck ? 'check-circle-o' : 'circle-o'} size={56 / dpi} color="#2870a9" style={styles.icon} />
  </View>

);

const TextRow = ({ texts, color, size }) => (
  <View style={{ flex: 1 }}><Text style={{ fontSize: size, color, fontFamily: 'Never say never' }}>{texts}</Text></View>
);

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggleClick = this.toggleClick.bind(this);
  }

  toggleClick() {
    this.setState({
      isDone: !this.state.isDone,
    });
  }

  render() {
    const { wrapper } = styles;
    const { title, description, time, isDone } = this.props.item;
    return (
      <View style={wrapper}>
        <View style={[{ flex: 0.8 }]}>
          <Button event={this.props.toggleEvent} Ele={() => <ToggleBtn isCheck={isDone} />} />
        </View>
        <View style={{ flex: 3, flexDirection: 'column' }}>
          <TextRow texts={title} color={'#000'} size={40 / dpi} />
          <TextRow texts={description} color={'#788a94'} size={40 / dpi} />
        </View>
        <Text style={{ flex: 0.5, fontFamily: 'Never say never', fontSize: 35 / dpi }}>{time}</Text>
      </View>
    );
  }
}

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  toggleEvent: PropTypes.func.isRequired,
};

ToggleBtn.propTypes = {
  isCheck: PropTypes.bool,
};

ToggleBtn.defaultProps = {
  isCheck: false,
};

TextRow.propTypes = {
  texts: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
};

TextRow.defaultProps = {
  texts: '',
  color: '#000',
  size: 15,
};
