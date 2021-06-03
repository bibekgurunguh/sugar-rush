import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import { default as nice } from 'constants/colors';
import Input from 'ui/Input';
import Button from 'ui/Button';

const dateIcon = () => (
  <MaterialIcons name="date-range" size={24} color={nice.darkRed} />
);
const roleIcon = () => (
  <MaterialCommunityIcons name="doctor" size={24} color={nice.darkRed} />
);

const WorkExperienceSingleScreen = ({ navigation }) => {
  const handleAdd = () => {
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
        <Text style={styles.h1}>Add Experience</Text>
      </View>
      <View style={styles.content}>
        <Input
          style={styles.input}
          Icon={dateIcon}
          placeholder="From (dd/mm/yyyy)"
        />
        <Input
          style={styles.input}
          Icon={dateIcon}
          placeholder="To (dd/mm/yyyy)"
        />
        <Input style={styles.input} Icon={roleIcon} placeholder="Role" />
        <Input style={styles.input} placeholder="Description" multiline />
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
