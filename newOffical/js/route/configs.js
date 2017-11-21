import TodoNavigator from './TodoNavigator';
import Personal from '../Personal';
import Timer from '../Timer';

const AppRouteConfigs = {
  Personal: {
    screen: Personal,
    navigationOptions: {
      header: null,
      title: '首页',
    },
  },
  Timer: {
    screen: Timer,
    navigationOptions: {
      header: null,
      title: 'Timer',
    },
  },
  TodoNavigator: {
    screen: TodoNavigator,
    navigationOptions: {
      header: null,
      title: 'Todo',
    },
  },
};
export default AppRouteConfigs;
