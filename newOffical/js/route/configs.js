import TodoNavigator from './TodoNavigator';
import Personal from '../Personal';

const AppRouteConfigs = {
  Personal: {
    screen: Personal,
    navigationOptions: {
      header: null,
      title: '首页',
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
