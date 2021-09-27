import {useRef} from 'react';
import {Animated} from 'react-native';

export const useFace = () => {
  const opacity = useRef(new Animated.Value(0)).current;

  const fadeIn = (cb?: Function) => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => (cb ? cb() : null));
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return {
    fadeIn,
    fadeOut,
    opacity,
  };
};
