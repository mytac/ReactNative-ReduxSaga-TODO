import React, { Component } from 'react';
import {
  Text, View, Image, Button, StyleSheet, TimePickerAndroid, TextInput,
} from 'react-native';

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    fontFamily: 'Never say never',
    fontSize: 25,
    textAlign: 'center',
  },
  input: { height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#fff',
    width: 120,
    borderRadius: 4,
  },
});

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.openTimePicker = this.openTimePicker.bind(this);
    this.state = {
      time: '',
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
          time: `${hour}:${minute}`,
        });
      }
    } catch ({ code, message }) {
      console.warn('Cannot open time picker', message);
    }
  }

  render() {
    const { title, input } = styles;
    const { time } = this.state;
    return (
      <View style={{ backgroundColor: '#2f258a', flex: 1, padding: 20 }}>
        <Text style={title}>Add new things</Text>
        <TextInput
          style={input}
          onFocus={() => this.openTimePicker()}
          value={time}
        />
        <Button
          onPress={this.openTimePicker}
          title="openPicker"
        />
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back"
        />
      </View>
    );
  }
}

export default Form;
