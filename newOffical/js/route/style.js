const activeColor = '#295cce';
const inactiveColor = '#fff';

const navigatorStyle = {
  drawerWidth: 230, // 抽屉宽
  drawerPosition: 'left', // 抽屉在左边还是右边
  drawerBackgroundColor: activeColor,
  contentOptions: {
    initialRouteName: 'App', // 默认页面组件
    activeItemKey: 'Notifications',
    labelStyle: {// 标签样式
      height: 30,
      fontSize: 20,
      fontFamily: 'Never say never',
    },
    iconContainerStyle: {
      opacity: 1,
    },
    activeTintColor: activeColor, // 选中文字颜色
    activeBackgroundColor: inactiveColor, // 选中背景颜色
    inactiveTintColor: inactiveColor, // 未选中文字颜色
    inactiveBackgroundColor: activeColor, // 未选中背景颜色
    style: { // 样式
      marginVertical: 0,
    },
  },
};

export default navigatorStyle;
