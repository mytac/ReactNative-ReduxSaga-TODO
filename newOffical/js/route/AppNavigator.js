import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, DrawerNavigator } from 'react-navigation';

import configs from './configs';
import style from './style';

export const AppNavigator = DrawerNavigator(configs, style);

const AppWithNavigationState = (props) => {
  const { dispatch, nav } = props;
  return (<AppNavigator
    navigation={addNavigationHelpers({ dispatch, state: nav })}
  />);
}
;

// 构造一个函数返回需要的state
const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func,
  nav: PropTypes.object.isRequired,
};

AppWithNavigationState.defaultProps = {
  dispatch: () => {},
};
