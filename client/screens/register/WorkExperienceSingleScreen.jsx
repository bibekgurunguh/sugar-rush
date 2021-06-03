import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import {
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import { default as nice } from 'constants/colors';
import Input from 'ui/Input';
import Button from 'ui/Button';
import { UserFormContext } from 'contexts/UserFormContext';
import { isAnyBlank } from 'services/utils';

const dateIcon = () => (
  <MaterialIcons name="date-range" size={24} color={nice.darkRed} />
);
const roleIcon = () => (
  <MaterialCommunityIcons name="doctor" size={24} color={nice.darkRed} />
);

const WorkExperienceSingleScreen = ({ navigation }) => {
  const [userForm, setUserForm] = useContext(UserFormContext);

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [role, setRole] = useState('');
  const [description, setDescription] = useState('');

  const handleAdd = () => {
    if (isAnyBlank(startDate, endDate, role, description))
      Alert.alert('Alert', 'Please fill in all the necessary fields.');
    else {
      setUserForm({
        ...userForm,
        experiences: [
          ...userForm.experiences,
          {
            start_date: startDate,
            end_date: endDate,
            role: role,
            description: description,
          },
        ],
      });
      navigation.navigate('WorkExperienceScreen');
    }
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
        <Text style={styles.h1}>Add Experience</Text>
      </View>
      <View style={styles.content}>
        <Input
          style={styles.input}
          Icon={dateIcon}
          placeholder="From (dd/mm/yyyy)"
          value={startDate}
          onChangeText={(text) => setStartDate(text)}
        />
        <Input
          style={styles.input}
          Icon={dateIcon}
          placeholder="To (dd/mm/yyyy)"
          value={endDate}
          onChangeText={(text) => setEndDate(text)}
        />
        <Input
          style={styles.input}
          Icon={roleIcon}
          placeholder="Role"
          value={role}
          onChangeText={(text) => setRole(text)}
        />
        <Input
          style={styles.input}
          placeholder="Description"
          multiline
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
      </View>
      <Button
        style={styles.addButton}
        title="Add"
        color={nice.darkRed}
        onPress={handleAdd}
      />
    </View>
  );
};

export default WorkExperienceSingleScreen;

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
  addButton: {
    width: '80%',
    alignSelf: 'center',
    margin: 10,
  },
});
