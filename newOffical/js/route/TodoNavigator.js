import { StackNavigator } from 'react-navigation';

import App from '../index';
import Form from '../Form';

const TodoRouteConfigs = {
  App: {
    screen: App,
    navigationOptions: {
      header: null,
    },
  },
  Form: {
    screen: Form,
    navigationOptions: {
      header: null,
    },
  },
};

export default StackNavigator(TodoRouteConfigs);
