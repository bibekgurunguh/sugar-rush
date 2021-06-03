import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Chip = ({ style, title = '', selected = false, onPress }) => {
  const [isSelected, setSelected] = useState(selected);
  const handlePress = () => {
    setSelected(!isSelected);
    if (onPress) onPress();
  };
  return (
    <TouchableOpacity
      style={[styles.container, style && style]}
      onPress={handlePress}
    >
      <View style={[styles.pill, { opacity: isSelected ? 1 : 0.4 }]}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Chip;

const styles = StyleSheet.create({
  container: {},
  pill: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 100,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
