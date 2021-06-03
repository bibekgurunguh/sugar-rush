import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const Input = ({
  style,
  Icon,
  placeholder,
  secureTextEntry,
  multiline,
  onChange,
}) => {
  return (
    <View style={[styles.container, style && style]}>
      {Icon && <Icon />}
      <TextInput
        style={[styles.textInput, { height: multiline && 100 }]}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChange={onChange}
        multiline={multiline}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    minWidth: 200,
    minHeight: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
  },
  textInput: {
    marginLeft: 10,
    width: '90%',
  },
});
