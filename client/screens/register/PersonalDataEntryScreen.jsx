import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  FontAwesome,
  MaterialIcons,
  Entypo,
  AntDesign,
} from '@expo/vector-icons';

import { default as nice } from 'constants/colors';
import Input from 'ui/Input';
import Checkbox from 'ui/Checkbox';
import Button from 'ui/Button';

const firstNameIcon = () => (
  <FontAwesome name="user" size={24} color={nice.darkRed} />
);
const lastNameIcon = () => (
  <FontAwesome name="user-o" size={24} color={nice.darkRed} />
);
const dobIcon = () => (
  <MaterialIcons name="date-range" size={24} color={nice.darkRed} />
);
const emailIcon = () => <Entypo name="email" size={24} color={nice.darkRed} />;

const PersonalDataEntryScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="leftcircle" size={24} color={nice.darkRed} />
        </TouchableOpacity>
        <Text style={styles.h1}>Register</Text>
      </View>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Input
          style={styles.input}
          Icon={firstNameIcon}
          placeholder="First name"
        />
        <Input
          style={styles.input}
          Icon={lastNameIcon}
          placeholder="Last name"
        />
        <Input
          style={styles.input}
          Icon={dobIcon}
          placeholder="Date of Birth (dd/mm/yyyy)"
        />
        <Input style={styles.input} Icon={emailIcon} placeholder="email" />
        <View style={styles.addressBox}>
          <Text>Address Details</Text>
          <Input style={styles.input} placeholder="Address 1" />
          <Input style={styles.input} placeholder="Address 2" />
          <View style={styles.countyCountry}>
            <Input style={styles.countyInput} placeholder="County" />
            <Input style={styles.countryInput} placeholder="Country" />
          </View>
          <Input style={styles.input} placeholder="Postcode" />
        </View>
      </ScrollView>
      <Checkbox
        style={styles.checkbox}
        title="Accept Terms and Conditions"
        value={false}
      />
      <Button
        style={styles.proceedButton}
        title="Proceed"
        color={nice.darkRed}
        onPress={() => navigation.navigate('PasswordsScreen')}
      />
    </View>
  );
};

export default PersonalDataEntryScreen;

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
  scrollView: {
    padding: 30,
    paddingTop: 0,
  },
  input: {
    marginVertical: 5,
  },
  addressBox: {
    borderColor: 'grey',
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
    backgroundColor: 'lightgrey',
  },
  countyCountry: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  countyInput: {
    flex: 1,
    marginRight: 5,
    minWidth: 0,
  },
  countryInput: {
    flex: 1,
    minWidth: 0,
  },
  checkbox: {
    justifyContent: 'center',
    marginVertical: 10,
  },
  proceedButton: {
    width: '80%',
    alignSelf: 'center',
    margin: 10,
  },
});
