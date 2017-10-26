import React from 'react';
import {
  Text, View, StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import Button from '../../Component/Button';

const styles = StyleSheet.create({
  middle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    height: 100,
    borderBottomColor: '#ddd',
    borderBottomWidth: 2,
    padding: 10,
    flexDirection: 'row',
  },
  checkBox: {
    borderWidth: 2,
    borderColor: '#2870a9',
    width: 50,
    height: 50,
    borderRadius: 10,
    marginTop: 10,
  },
  icon: {
  },

});

const ToggleBtn = ({ isCheck }) => (
  <View style={[styles.checkBox, styles.middle]}>
    <Icon name={isCheck ? 'check-circle-o' : 'circle-o'} size={28} color="#2870a9" style={styles.icon} />
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
          <TextRow texts={title} color={'#000'} size={20} />
          <TextRow texts={description} color={'#788a94'} size={20} />
        </View>
        <Text style={{ flex: 0.5, fontFamily: 'Never say never' }}>{time}</Text>
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
