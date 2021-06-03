import React, { useEffect, useContext } from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';

import { default as nice } from 'constants/colors';
import Button from 'ui/Button';
import Input from 'ui/Input';
import { UserContext } from 'contexts/UserContext';

const userIcon = () => <Entypo name="user" size={24} color={nice.darkRed} />;
const passwordIcon = () => (
  <Entypo name="lock-open" size={24} color={nice.darkRed} />
);

const LoginScreen = ({ navigation }) => {
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    (async () => {
      try {
        let loggedUser = await SecureStore.getItemAsync('user');
        if (loggedUser !== null) {
          setUser(JSON.parse(loggedUser));
          navigation.navigate('ProfileScreen');
        }
      } catch (err) {
        console.log('Error from LoginScreen: ', err);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('assets/sugar-rush-logo.png')}
      />
      <View style={styles.loginSection}>
        <View style={styles.titleCard}>
          <Text style={styles.h1}>Welcome</Text>
          <Text>Login to your account</Text>
        </View>
        <Input style={styles.input} Icon={userIcon} placeholder="username" />
        <Input
          style={styles.input}
          Icon={passwordIcon}
          placeholder="password"
          secureTextEntry
        />
        <Button
          title="Login"
          style={styles.button}
          color={nice.darkBlue}
          shadow
          onPress={() =>
            Alert.alert(
              'Sorry',
              'Login feature is not available at the moment, please register.'
            )
          }
        />
        <View style={styles.line} />
        <Text style={styles.textWhite}>Don't have an account yet?</Text>
        <Button
          title="Register"
          style={styles.button}
          color="white"
          outlined
          onPress={() => navigation.navigate('RegisterScreen')}
        />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logo: {
    marginTop: 20,
    width: 150,
    height: 150,
  },
  titleCard: {
    position: 'absolute',
    top: -50,
    left: '25%',
    right: '25%',
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    paddingTop: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  h1: {
    fontSize: 40,
  },
  loginSection: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '70%',
    paddingTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: nice.red,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  input: {
    width: '70%',
    marginVertical: 10,
  },
  textWhite: {
    color: 'white',
  },
  button: {
    marginVertical: 5,
    width: '70%',
    alignSelf: 'center',
  },
  line: {
    width: '90%',
    height: 1.5,
    backgroundColor: 'white',
    marginVertical: 30,
  },
});
