import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Entypo, AntDesign } from '@expo/vector-icons';

import { default as nice } from 'constants/colors';
import Input from 'ui/Input';
import Button from 'ui/Button';

const passwordIcon = () => (
  <Entypo name="lock-open" size={24} color={nice.darkRed} />
);

const PasswordsScreen = ({ navigation }) => {
  const handleProceed = () => {
    navigation.navigate('WorkExperienceScreen');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="leftcircle" size={24} color={nice.darkRed} />
        </TouchableOpacity>
        <Text style={styles.h1}>Password</Text>
      </View>
      <View style={styles.content}>
        <Input
          style={styles.input}
          Icon={passwordIcon}
          placeholder="Password"
        />
        <Input
          style={styles.input}
          Icon={passwordIcon}
          placeholder="Confirm password"
        />
      </View>
      <Button
        style={styles.proceedButton}
        title="Proceed"
        color={nice.darkRed}
        onPress={handleProceed}
      />
    </View>
  );
};

export default PasswordsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    marginTop: 40,
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  h1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: nice.darkRed,
    marginLeft: 10,
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  input: {
    width: '90%',
    marginVertical: 10,
  },
  proceedButton: {
    width: '80%',
    alignSelf: 'center',
    margin: 10,
  },
});
