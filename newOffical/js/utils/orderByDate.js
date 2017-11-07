// arr中为object

function orderByDate(arr, key = 'time') {
  if (!arr) return arr;
  // 包含日期
  const len = arr[0][key].length;
  if (len > 0) {
    if (len > 6) {
      arr.sort((a, b) => Date.parse(b[key]) - Date.parse(a[key]));
    } else {
      arr.sort((a, b) => Date.parse(`1970-01-01 ${b[key]}`) - Date.parse(`1970-01-01 ${a[key]}`));
    }
  }
  return arr;
}

export default orderByDate;
