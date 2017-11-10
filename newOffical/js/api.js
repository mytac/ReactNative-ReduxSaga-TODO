import orderByDate from './utils/orderByDate';
import { setData, getData, clearData } from './utils/dataOperations';

// 存一个新值
export function pushData(item) {
  return getData('data', (res) => {
    const copy = [].concat(JSON.parse(res));
    copy.push(item);
    return setData('data', JSON.stringify(orderByDate(copy)));
  });
}

// 获取所有数据
export function fetchData() {
  return getData('data', res => orderByDate(JSON.parse(res)));
}

// 删除
export function deleteData(idx) {
  return getData('data', (res) => {
    const copy = [].concat(JSON.parse(res));
    copy.splice(idx, 1);
    return setData('data', JSON.stringify(copy));
  });
}

// 完成/未完成状态
export function toggleData(idx) {
  return getData('data', (res) => {
    const copy = [].concat(JSON.parse(res));
    const result = copy.map((item, index) => {
      if (index === parseInt(idx, 10)) {
        return Object.assign({}, item,
          {
            isDone: !item.isDone,
          });
      }
      return item;
    });
    return setData('data', JSON.stringify(result));
  });
}
