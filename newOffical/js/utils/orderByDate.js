
function orderByDate(arr, key = 'time') {
  // 包含日期
  if (arr[0][key].length > 6) {
    arr.sort((a, b) => Date.parse(b[key]) - Date.parse(a[key]));
  } else {
    // 只包含时分秒
    arr.sort((a, b) => Date.parse(`1970-01-01 ${b[key]}`) - Date.parse(`1970-01-01 ${a[key]}`));
  }

  return arr;
}

export default orderByDate;
