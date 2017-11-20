/*
用来处理固定位数的数字 */

const formatNum = (num) => {
  const tempNum = Math.floor(num);
  return (tempNum < 10 ? `0${tempNum}` : tempNum);
};

export default formatNum;
