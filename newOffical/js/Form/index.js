import React, { Component } from 'react';
import {
  Text, View, Image, Button, StyleSheet, TimePickerAndroid, TextInput, KeyboardAvoidingView,
} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import PropTypes from 'prop-types';
import transferByDpi from '../utils/transferByDpi';

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
  title: {
    color: '#fff',
    fontFamily: 'Never say never',
    fontSize: 50,
    textAlign: 'center',
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
      time: '',
      value: 0,
    };
  }

  async openTimePicker() {
    try {
      const { action, hour, minute } = await TimePickerAndroid.open({
        hour: 0,
        minute: 0,
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
    const { title, input, container, wrapper, radioLabel, radioForm } = styles;
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
        <Text style={title}>Add new things</Text>
        <KeyboardAvoidingView
          behavior="padding"
          style={wrapper}
        >
          <TextInput
            style={[input, { width: transferByDpi(240), paddingBottom: 0 }]}
            onFocus={() => this.openTimePicker()}
            value={time}
            underlineColorAndroid="transparent"
          />
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
          <Button
            onPress={() => this.props.navigation.goBack()}
            title="Go back"
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
