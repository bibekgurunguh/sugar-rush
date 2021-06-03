import React, { useEffect, useState, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { default as nice } from 'constants/colors';
import Button from 'ui/Button';
import Chip from 'ui/Chip';
import { getIndustries } from 'services/apiServices';
import { UserFormContext } from 'contexts/UserFormContext';

const IndustriesScreen = ({ navigation }) => {
  const [userForm, setUserForm] = useContext(UserFormContext);
  const [industries, setIndustries] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchedIndustries = await getIndustries();
      setIndustries(fetchedIndustries);
    })();
  }, [userForm]);

  const handleProceed = () => {
    navigation.navigate('SubmitScreen');
  };

  const toggleIndustry = (id) => {
    if (userForm.industries.includes(id))
      setUserForm({
        ...userForm,
        industries: userForm.industries.filter((el) => el !== id),
      });
    else setUserForm({ ...userForm, industries: [...userForm.industries, id] });
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
        <Text style={styles.h1}>Industries</Text>
      </View>
      <View style={styles.content}>
        <FlatList
          style={styles.list}
          numColumns={2}
          keyExtractor={(item) => item.id}
          data={industries}
          renderItem={({ item }) => (
            <Chip
              style={styles.chip}
              title={item.industry}
              selected={userForm.industries.includes(item.id)}
              onPress={() => toggleIndustry(item.id)}
            />
          )}
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

export default IndustriesScreen;

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
  list: {
    width: '90%',
  },
  chip: {
    marginHorizontal: 2,
    marginBottom: 5,
    flexGrow: 1,
  },
  proceedButton: {
    width: '80%',
    alignSelf: 'center',
    margin: 10,
  },
});
