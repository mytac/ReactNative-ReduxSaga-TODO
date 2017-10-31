import React from 'react';
import {
  Text, View,
  Button, StyleSheet, TimePickerAndroid, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback,
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
  titleStyle: {
    color: '#fff',
    fontFamily: 'Never say never',
    fontSize: 50,
    textAlign: 'center',
  },
  timePickerWidth: {
    width: 220,
  },
  timePicker: {
    backgroundColor: '#fff',
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

const Input = ({ val, placeholder, onChangeText }) => (
  <View>
    <TextInput
      style={[styles.input, styles.inputNormal]}
      value={val}
      placeholder={placeholder}
      keyboardType="default"
      placeholderTextColor="#a3a3a3"
      underlineColorAndroid="#a3a3a3"
      onChangeText={onChangeText}
    />
  </View>);

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.openTimePicker = this.openTimePicker.bind(this);
    this.state = {
      time: '00:00',
      type: 0,
      title: '',
      description: '',
      place: '',
    };
    this.submit = this.submit.bind(this);
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

  // submit
  submit() {
    console.log(this.state);
  }

  render() {
    const { titleStyle, container,
      wrapper, radioLabel, radioForm, timePicker, timePickerWidth } = styles;
    const { time, title, description, place } = this.state;

    // radio配置
    const radioProps = [
      { label: 'Personal', value: 0 },
      { label: 'Business', value: 1 },
    ];

    return (
      <View
        style={container}
      >
        <View>
          <MyBtn
            event={() => this.props.navigation.goBack()}
            Ele={() => <Icon name="chevron-left" size={transferByDpi(60)} color="#0981f7" />}
          />
          <Text style={titleStyle}>Add new things</Text>
        </View>
        <KeyboardAvoidingView
          behavior="position"
          style={wrapper}
        >
          <View style={timePickerWidth}>
            <TouchableWithoutFeedback
              onPress={() => this.openTimePicker()}
            >
              <View>
                <Text
                  style={[timePickerWidth, timePicker]}
                >{time}</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <RadioForm
            formHorizontal
            radio_props={radioProps}
            initial={0}
            onPress={(type) => { this.setState({ type }); }}
            labelStyle={radioLabel}
            style={radioForm}
          />
          <Input
            placeholder="Title"
            onChangeText={text => this.setState({ title: text })}
            val={title}
          />
          <Input
            placeholder="Description"
            onChangeText={text => this.setState({ description: text })}
            val={description}
          />
          <Input
            placeholder="Place"
            onChangeText={text => this.setState({ place: text })}
            val={place}
          />
          <Button
            onPress={this.submit}
            title="submit"
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
