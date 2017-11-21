import TodoNavigator from './TodoNavigator';
import Personal from '../Personal';
import Timer from '../Timer';
import Weather from '../Weather';

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
  Weather: {
    screen: Weather,
    navigationOptions: {
      header: null,
      title: 'Weather',
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
