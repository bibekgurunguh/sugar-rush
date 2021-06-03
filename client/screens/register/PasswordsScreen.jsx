import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { Entypo, AntDesign } from '@expo/vector-icons';

import { default as nice } from 'constants/colors';
import Input from 'ui/Input';
import Button from 'ui/Button';
import { UserFormContext } from 'contexts/UserFormContext';
import { isAnyBlank, isPasswordValid } from 'services/utils';

const passwordIcon = () => (
  <Entypo name="lock-open" size={24} color={nice.darkRed} />
);

const PasswordsScreen = ({ navigation }) => {
  const [userForm, setUserForm] = useContext(UserFormContext);

  const handleProceed = () => {
    if (isAnyBlank(userForm.password, userForm.password_confirmation))
      Alert.alert('Alert', 'Please fill all the necessary fields.');
    else if (!isPasswordValid(userForm.password))
      Alert.alert(
        'Alert',
        'Your password must be at least 8 characters long and must include at least one uppercase, one lowercase, one number and one symbol.'
      );
    else if (userForm.password !== userForm.password_confirmation)
      Alert.alert('Alert', 'Your passwords must match.');
    else navigation.navigate('WorkExperienceScreen');
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
          value={userForm.password}
          onChangeText={(text) => setUserForm({ ...userForm, password: text })}
          secureTextEntry
        />
        <Input
          style={styles.input}
          Icon={passwordIcon}
          placeholder="Confirm password"
          value={userForm.password_confirmation}
          onChangeText={(text) =>
            setUserForm({ ...userForm, password_confirmation: text })
          }
          secureTextEntry
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
