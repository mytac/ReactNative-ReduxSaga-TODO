export default function isEmptyValid(data) {
  // 判断数组中是否存在空字符串
  if (Array.isArray(data)) {
    return data.every(item => item !== '');
  }

  // 判断键值对中是否存在空字符串
  const keys = Object.keys(data);
  return keys.every(key => data[key] !== '');
}
