import React from 'react';
import { Text, View, ScrollView, ListView } from 'react-native';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import transferByDpi from '../../utils/transferByDpi';
import MyBtn from '../../Component/Button';
import ListItem from './ListItem';
import styles from './styles';


export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }

  render() {
    const { text, title, container,
      backRightBtn, backRightBtnRight,
      rowBack, rowFront } = styles;
    const { data, toggleEvent, delEvent } = this.props;
    return (
      <ScrollView style={container}>
        <Text style={[text, title]}>Inbox</Text>
        <SwipeListView
          dataSource={this.ds.cloneWithRows(data)}
          renderRow={(d, secId, rowId, rowMap) => (
            <SwipeRow
              rightOpenValue={-transferByDpi(150)}
              disableRightSwipe
            >
              <View style={rowBack}>
                <MyBtn
                  outerStyle={[backRightBtn, backRightBtnRight]}
                  Ele={() => (<Icon
                    name="trash-o"
                    size={transferByDpi(50)}
                    color="#fff"
                  />)}
                  event={() => {
                    rowMap[`${secId}${rowId}`].closeRow();
                    delEvent(rowId);
                  }}
                />
              </View>
              <View
                style={rowFront}
                underlayColor={'#AAA'}
              >
                <ListItem
                  item={d}
                  key={rowId}
                  toggleEvent={() => toggleEvent(rowId)}
                />
              </View>
            </SwipeRow>
          )}
        />
      </ScrollView>
    );
  }
}

Form.propTypes = {
  data: PropTypes.array.isRequired,
  toggleEvent: PropTypes.func.isRequired,
  delEvent: PropTypes.func.isRequired,
};

