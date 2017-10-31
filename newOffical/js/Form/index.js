import React, { Component } from 'react';
import {
  Text, View, Image, Button, StyleSheet, TimePickerAndroid, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback,
} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import transferByDpi from '../utils/transferByDpi';
import MyBtn from '../Component/Button';

const styles = StyleSheet.create(transferByDpi({
  container: {
    backgroundColor: '#2f258a',
    flex: 1,
    padding: 40,
  },
  wrapper: {
    margin: 80,
    flexDirection: 'column',
  },
  arrowWrapper: {
    marginRight: 50,
  },
  title: {
    color: '#fff',
    fontFamily: 'Never say never',
    fontSize: 50,
    textAlign: 'center',
  },
  timePicker: {
    backgroundColor: '#fff',
    width: 220,
    height: 80,
    fontSize: 50,
    borderRadius: 10,
    textAlign: 'center',
    fontFamily: 'Never say never',
  },
  input: {
    height: 120,
    borderColor: 'gray',
    borderWidth: 2,
    backgroundColor: '#fff',
    borderRadius: 8,
    fontSize: 45,
    fontFamily: 'Never say never',
    paddingTop: 10,
    paddingLeft: 20,
    marginBottom: 20,
  },
  inputNormal: {
    backgroundColor: '#2f258a',
    borderWidth: 0,
    color: '#fff',
  },
  radioLabel: {
    color: '#fff',
    fontSize: 40,
    fontFamily: 'Never say never',
    marginRight: 30,
  },
  radioForm: {
    marginTop: 50,
    marginBottom: 50,
  },
}));

// 处理时间格式
const formatTime = time => (time < 10 ? `0${time}` : time);

const Input = ({ val, placeholder }) => (
  <View>
    <TextInput
      style={[styles.input, styles.inputNormal]}
      value={val}
      placeholder={placeholder}
      keyboardType="default"
      placeholderTextColor="#a3a3a3"
      underlineColorAndroid="#a3a3a3"
    />
  </View>);

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.openTimePicker = this.openTimePicker.bind(this);
    this.state = {
      time: '00:00',
      value: 0,
    };
  }

  // 打开时间选择框
  async openTimePicker() {
    try {
      const [h, m] = this.state.time.split(':'); // 获取当前选择框内的时间
      const { action, hour, minute } = await TimePickerAndroid.open({
        hour: parseInt(h, 10),
        minute: parseInt(m, 10),
        is24Hour: true, // Will display '2 PM'
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        this.setState({
          time: `${formatTime(hour)}:${formatTime(minute)}`,
        });
      }
    } catch ({ code, message }) {
      console.warn('Cannot open time picker', message);
    }
  }

  render() {
    const { title, input, container, wrapper, radioLabel, radioForm, timePicker } = styles;
    const { time } = this.state;

    // radio配置
    const radioProps = [
      { label: 'Personal', value: 0 },
      { label: 'Business', value: 1 },
    ];

    return (
      <View
        style={container}
      >
        <View style={title}>
          <MyBtn
            event={() => this.props.navigation.goBack()}
            Ele={() => <Icon name="chevron-left" size={transferByDpi(60)} color="#0981f7" />}
          />
          <Text style={title}>Add new things</Text>
        </View>
        <KeyboardAvoidingView
          behavior="padding"
          style={wrapper}
        >
          <TouchableWithoutFeedback
            onPress={() => this.openTimePicker()}
          >
            <View>
              <Text
                style={timePicker}
              >{time}</Text>
            </View>
          </TouchableWithoutFeedback>
          <RadioForm
            formHorizontal
            radio_props={radioProps}
            initial={0}
            onPress={(value) => { this.setState({ value }); }}
            labelStyle={radioLabel}
            style={radioForm}
          />
          <Input placeholder="Title" />
          <Input placeholder="Description" />
          <Input placeholder="Place" />
          <Button
            onPress={this.openTimePicker}
            title="openPicker"
          />
        </KeyboardAvoidingView>

      </View>
    );
  }
}

export default Form;

Form.propTypes = {
  navigation: PropTypes.object.isRequired,
};
