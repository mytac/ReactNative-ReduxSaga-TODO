import React from 'react';
import {
  Text, View, Animated, Easing,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import transferByDpi from '../utils/transferByDpi';
import styles from './style';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

class FadeInView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(1), // 透明度初始值设为0
      transformAnim: new Animated.Value(1),
    };
  }

  componentDidMount() {
    Animated.timing(
      this.state.transformAnim,
      { toValue: 400,
        duration: 1200,
        delay: 2000,
        easing: Easing.elastic(2),
      },
    ).start();
    Animated.timing( // 随时间变化而执行的动画类型
      this.state.fadeAnim, // 动画中的变量值
      {
        toValue: 1, // 透明度最终变为1，即完全不透明
        duration: 800,
        easing: Easing.elastic(1),
        delay: 2200,
      },
    ).start(); // 开始执行动画
  }

  render() {
    return (
      <Animated.View // 可动画化的视图组件
        style={[
          { opacity: this.state.fadeAnim },
          styles.animeWrapper,
        ]}
      >
        <AnimatedIcon
          name="twitter"
          size={transferByDpi(200)}
          color="#fff"
          style={{ transform: [{ scale: this.state.transformAnim }] }}
        />
      </Animated.View>
    );
  }
}

export default function () {
  return (
    <FadeInView>
      <Text style={{ fontSize: 28, textAlign: 'center', margin: 10 }}>Fading in</Text>
    </FadeInView>
  );
}
