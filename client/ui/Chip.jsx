import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Chip = ({ style, title, selected, onPress }) => {
  const [isSelected, setSelected] = useState(selected);
  const handlePress = () => {
    setSelected(!isSelected);
    if (onPress) onPress();
  };
  return (
    <TouchableOpacity
      style={[
        styles.container,
        style && style,
        { opacity: isSelected ? 1 : 0.4 },
      ]}
      onPress={handlePress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Chip;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 100,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
