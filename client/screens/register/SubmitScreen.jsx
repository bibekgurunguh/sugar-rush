import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { default as nice } from 'constants/colors';
import Button from 'ui/Button';
import { UserFormContext } from 'contexts/UserFormContext';

const SubmitScreen = ({ navigation }) => {
  const [userForm, setUserForm] = useContext(UserFormContext);

  return (
    <View style={styles.container}>
      <View style={styles.bigCircle} />
      <View style={styles.bigCircle2} />
      <FontAwesome name="thumbs-up" size={80} color={nice.darkBlue} />
      <Text style={styles.message}>
        You are all set. Do you want to create your account?
      </Text>
      <Button
        style={styles.goBackButton}
        title="Go back"
        color="white"
        outlined
        onPress={() => navigation.goBack()}
      />
      <Button
        style={styles.createButton}
        title="Create"
        color={nice.darkBlue}
        shadow
      />
    </View>
  );
};

export default SubmitScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigCircle: {
    position: 'absolute',
    left: -400,
    height: 500,
    width: 500,
    borderRadius: 300,
    backgroundColor: nice.darkRed,
    transform: [{ scale: 2 }],
    opacity: 0.6,
  },
  bigCircle2: {
    position: 'absolute',
    left: 0,
    top: 400,
    height: 500,
    width: 500,
    borderRadius: 300,
    backgroundColor: nice.darkRed,
    transform: [{ scale: 2 }],
    opacity: 0.6,
  },
  message: {
    width: '50%',
    textAlign: 'center',
    marginVertical: 30,
    color: 'white',
  },
  goBackButton: {
    position: 'absolute',
    bottom: 150,
    width: '70%',
  },
  createButton: {
    position: 'absolute',
    bottom: 100,
    width: '70%',
  },
});
