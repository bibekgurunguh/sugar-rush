import React, { useEffect, useContext } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import * as SecureStore from 'expo-secure-store';

import { default as nice } from 'constants/colors';
import Button from 'ui/Button';
import { UserContext } from 'contexts/UserContext';

const ProfileScreen = ({ navigation }) => {
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    (async () => {
      let loggedUser = await SecureStore.getItemAsync('user');
      if (loggedUser !== null) setUser(JSON.parse(loggedUser));
    })();
  }, []);

  const handleLogout = async () => {
    try {
      setUser(null);
      await SecureStore.deleteItemAsync('user');
      navigation.navigate('LoginScreen');
    } catch (err) {
      console.log('Error from logging out: ', err);
    }
  };

  return (
    <View style={styles.container}>
      {user && (
        <>
          <Image
            style={styles.image}
            source={{ uri: 'https://source.unsplash.com/500x500/?person' }}
          />
          <View style={styles.content}>
            <Text style={styles.name}>
              {`${user.user.first_name} ${user.user.last_name}`}
            </Text>
            <Text
              style={styles.emaildob}
            >{`${user.user.email} - ${user.user.date_of_birth}`}</Text>
            <View style={styles.industries}>
              {user.industries.map((industry, i) => (
                <View style={styles.industry} key={i}>
                  <Text style={styles.industryText}>{industry}</Text>
                </View>
              ))}
            </View>
            <ScrollView>
              <View style={styles.addressView}>
                <Text>{user.user.address_1}</Text>
                <Text>{user.user.address_2}</Text>
                <Text>{`${user.user.county}, ${user.user.country}`}</Text>
                <Text>{user.user.postcode}</Text>
              </View>
              {user.experiences.map((exp, i) => (
                <View style={styles.exp} key={i}>
                  <Text style={styles.expHeader}>{exp.role}</Text>
                  <Text
                    style={styles.expDates}
                  >{`${exp.start_date} - ${exp.end_date}`}</Text>
                  <Text style={styles.expDescription}>{exp.description}</Text>
                </View>
              ))}
            </ScrollView>
            <Button
              style={styles.logoutButton}
              title="Logout"
              color={nice.darkRed}
              shadow
              onPress={handleLogout}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 250,
    width: '100%',
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    position: 'relative',
    top: -20,
    justifyContent: 'flex-start',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: 'white',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 15,
    marginBottom: 0,
    textTransform: 'uppercase',
  },
  emaildob: {
    color: 'darkgrey',
    marginLeft: 15,
  },
  industries: {
    backgroundColor: nice.darkRed,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  industry: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 200,
    height: 70,
    width: 70,
    margin: 10,
    marginVertical: 15,
  },
  industryText: {
    textAlign: 'center',
    color: 'white',
  },
  addressView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,100,0,0.1)',
  },
  exp: {
    width: '100%',
    padding: 20,
    borderBottomWidth: 1,
  },
  expHeader: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  expDates: {
    fontSize: 15,
    color: 'darkgrey',
  },
  expDescription: {},
  logoutButton: {
    width: '70%',
    alignSelf: 'center',
  },
});
