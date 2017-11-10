import orderByDate from './utils/orderByDate';
import { setData, getData, clearData } from './utils/dataOperations';

const DATA = orderByDate([
  { time: '17:21', isDone: true, title: 'xxxx', description: 'bla bla bla', type: 'personal' },
  { time: '10:22', isDone: true, title: 'xxxx', description: 'bla bla bla' },
  { time: '10:28', isDone: false, title: 'xxxx', description: 'bla bla bla', type: 'personal' },
  { time: '10:24', isDone: true, title: 'xxxx', description: 'bla bla bla' },
  { time: '10:24', isDone: false, title: 'xxxx', description: 'bla bla bla', type: 'personal' },
  { time: '10:24', isDone: true, title: 'xxxx', description: 'bla bla bla', type: 'personal' },
], 'time');

export default () => new Promise((resolve, reject) => {
  setTimeout(() => resolve(DATA), 1000);
});

// 存一个新值
export function pushData(newData) {
  return getData('data', (res) => {
    const source = JSON.parse(res);
    const copy = [].concat(source);
    copy.push(newData);
    setData('data', copy);
    return copy;
  });
}

// 获取所有数据
export function fetchData() {
  return getData('data', res => JSON.parse(res));
}
