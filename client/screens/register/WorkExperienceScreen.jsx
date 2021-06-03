import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { default as nice } from 'constants/colors';
import Button from 'ui/Button';

const WorkExperienceScreen = ({ navigation }) => {
  const handleProceed = () => {
    navigation.navigate('IndustriesScreen');
  };
  const handleAdd = () => {
    navigation.navigate('WorkExperienceSingleScreen');
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
});
