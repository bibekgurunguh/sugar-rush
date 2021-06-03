import React, { useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

import { default as nice } from 'constants/colors';
import Button from 'ui/Button';
import { UserFormContext } from 'contexts/UserFormContext';

const WorkExperienceScreen = ({ navigation }) => {
  const [userForm, setUserForm] = useContext(UserFormContext);

  const handleProceed = () => {
    navigation.navigate('IndustriesScreen');
  };
  const handleAdd = () => {
    navigation.navigate('WorkExperienceSingleScreen');
  };
  const handleRemove = (id) => {
    setUserForm({
      ...userForm,
      experiences: userForm.experiences.filter((item, i) => i !== id),
    });
  };

  const ExperienceCard = ({ details, id }) => {
    return (
      <View style={styles.experienceCard}>
        <Text style={styles.expHeader}>{details.role}</Text>
        <Text
          style={styles.expDates}
        >{`From ${details.start_date} to ${details.end_date}`}</Text>
        <Text style={styles.expDescriptionr}>{details.description}</Text>
        <TouchableOpacity
          style={styles.deleteButton}
          activeOpacity={0.7}
          onPress={() => handleRemove(id)}
        >
          <MaterialCommunityIcons
            name="delete-circle"
            size={30}
            color={nice.darkRed}
          />
        </TouchableOpacity>
      </View>
    );
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
        <Text style={styles.h1}>Work Experience</Text>
      </View>
      <FlatList
        keyExtractor={(item, i) => i.toString()}
        data={userForm.experiences}
        renderItem={({ item, index }) => (
          <ExperienceCard details={item} id={index} />
        )}
      />
      <View style={styles.content}>
        <TouchableOpacity activeOpacity={0.7} onPress={handleAdd}>
          <AntDesign name="pluscircle" size={60} color={nice.darkRed} />
        </TouchableOpacity>
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

export default WorkExperienceScreen;

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
  addButton: {},
  proceedButton: {
    width: '80%',
    alignSelf: 'center',
    margin: 10,
  },
  experienceCard: {
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  expHeader: {
    fontWeight: 'bold',
    fontSize: 20,
    width: '100%',
  },
  expDates: {
    fontSize: 12,
    width: '100%',
    color: 'grey',
  },
  expDescription: {
    width: '100%',
  },
  deleteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
