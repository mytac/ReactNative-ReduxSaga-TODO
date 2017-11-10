import orderByDate from './utils/orderByDate';
import { setData, getData, clearData } from './utils/dataOperations';

// 存一个新值
export function pushData(data, item) {
  const res = [].concat(data);
  res.push(item);
  return setData('data', JSON.stringify(res));
}

// 获取所有数据
export function fetchData() {
  return getData('data', res => JSON.parse(orderByDate(res)));
}

// 删除
export function deleteData(data, idx) {
  const res = [].concat(data);
  res.splice(idx, 1);
  return setData('data', JSON.stringify(res));
}
