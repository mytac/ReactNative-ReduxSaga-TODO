import { AsyncStorage } from 'react-native';
import orderByDate from './orderByDate'
/* eslint-disable no-console */

// 存数据
export const setData = async (key, val) => {
  try {
    await AsyncStorage.setItem(key, val);
    console.log('saved');
  } catch (err) {
    console.log('err', err);
  }
  return false;
};

// 异步取数据
export const getData = (key, handleData) => AsyncStorage.getItem(key)
  .then(handleData)
  .catch((err) => { console.log(err); });

// 清空所有数据
export const clearData = handleData => AsyncStorage.clear()
  .then(handleData)
  .catch(err => console.log(err));


const DATA = orderByDate([
  { time: '17:21', isDone: true, title: 'xxxx', description: 'bla bla bla', type: 'personal' },
  { time: '10:22', isDone: true, title: 'xxxx', description: 'bla bla bla' },
  { time: '10:28', isDone: false, title: 'xxxx', description: 'bla bla bla', type: 'personal' },
  { time: '10:24', isDone: true, title: 'xxxx', description: 'bla bla bla' },
  { time: '10:24', isDone: false, title: 'xxxx', description: 'bla bla bla', type: 'personal' },
  { time: '10:24', isDone: true, title: 'xxxx', description: 'bla bla bla', type: 'personal' },
]);

setData('data', JSON.stringify(DATA));

