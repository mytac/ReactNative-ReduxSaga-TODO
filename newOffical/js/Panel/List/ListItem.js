import React from 'react';
import {
  Text, View, StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import transferByDpi from '../../utils/transferByDpi';
import Button from '../../Component/Button';

const styles = StyleSheet.create(transferByDpi({
  middle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    height: 200,
    borderBottomColor: '#ddd',
    borderBottomWidth: 4,
    padding: 20,
    flexDirection: 'row',
    position: 'relative',
    zIndex: 10,
  },
  checkBox: {
    borderWidth: 4,
    borderColor: '#2870a9',
    width: 100,
    height: 100,
    borderRadius: 20,
    marginTop: 20,
  },
}));

const ToggleBtn = ({ isCheck }) => (
  <View style={[styles.checkBox, styles.middle]}>
    <Icon name={isCheck ? 'check-circle-o' : 'circle-o'} size={transferByDpi(56)} color="#2870a9" style={styles.icon} />
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
          <TextRow texts={title} color={'#000'} size={transferByDpi(40)} />
          <TextRow texts={description} color={'#788a94'} size={transferByDpi(40)} />
        </View>
        <Text style={{ flex: 0.5, fontFamily: 'Never say never', fontSize: transferByDpi(40) }}>{time}</Text>
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
