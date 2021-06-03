import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const Checkbox = ({ style, title = '', value, color = 'black' }) => {
  const [isChecked, setChecked] = useState(value);
  const handleOnChange = () => {
    setChecked(!isChecked);
  };
  return (
    <TouchableOpacity
      style={[styles.container, style && style]}
      onPress={handleOnChange}
      activeOpacity={0.7}
    >
      <View style={[styles.box, { borderColor: color }]}>
        {isChecked && <Entypo name="check" size={16} color="green" />}
      </View>
      <Text style={{ opacity: isChecked ? 1 : 0.6, color: color }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  box: {
    height: 20,
    width: 20,
    borderRadius: 5,
    borderWidth: 2,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
