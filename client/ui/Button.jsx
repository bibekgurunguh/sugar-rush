import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Touchable,
} from 'react-native';

import { default as nice } from 'constants/colors';

const Button = ({
  color = nice.blue,
  textColor = 'white',
  title,
  outlined,
  shadow,
  style,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        style && style,
        shadow && styles.shadow,
        {
          backgroundColor: !outlined ? color : 'rgba(0,0,0,0)',
          borderWidth: outlined && 2,
          borderColor: color,
        },
      ]}
      activeOpacity={0.6}
      onPress={onPress}
    >
      <Text
        style={[
          styles.buttonText,
          {
            color: outlined ? color : textColor,
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textTransform: 'uppercase',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Button;
