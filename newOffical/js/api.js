import orderByDate from './utils/orderByDate';

const DATA = orderByDate([
  { time: '17:21', isDone: true, title: 'xxxx', description: 'bla bla bla', type: 'personal' },
  { time: '10:22', isDone: true, title: 'xxxx', description: 'bla bla bla' },
  { time: '10:28', isDone: false, title: 'xxxx', description: 'bla bla bla', type: 'personal' },
  { time: '10:24', isDone: true, title: 'xxxx', description: 'bla bla bla' },
  { time: '10:24', isDone: false, title: 'xxxx', description: 'bla bla bla', type: 'personal' },
  { time: '10:24', isDone: true, title: 'xxxx', description: 'bla bla bla', type: 'personal' },
], 'time');

export default () => new Promise((resolve, reject) => {
  setTimeout(() => resolve(DATA), 3000);
});
