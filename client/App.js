import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Global states
import ContextProvider from 'contexts';

// Screens
import LoginScreen from 'screens/LoginScreen';
import ProfileScreen from 'screens/ProfileScreen';
import PersonalDataEntryScreen from 'screens/register/PersonalDataEntryScreen';
import PasswordsScreen from 'screens/register/PasswordsScreen';
import WorkExperienceScreen from 'screens/register/WorkExperienceScreen';
import WorkExperienceSingleScreen from 'screens/register/WorkExperienceSingleScreen';
import IndustriesScreen from 'screens/register/IndustriesScreen';
import SubmitScreen from 'screens/register/SubmitScreen';
import AuthenticatedScreen from 'screens/register/AuthenticatedScreen';

const Stack = createStackNavigator();
const RegisterStack = createStackNavigator();
const RegisterScreen = () => {
  return (
    <RegisterStack.Navigator>
      <RegisterStack.Screen
        name="PersonalDataEntryScreen"
        component={PersonalDataEntryScreen}
        options={{ headerShown: false }}
      />
      <RegisterStack.Screen
        name="PasswordsScreen"
        component={PasswordsScreen}
        options={{ headerShown: false }}
      />
      <RegisterStack.Screen
        name="WorkExperienceScreen"
        component={WorkExperienceScreen}
        options={{ headerShown: false }}
      />
      <RegisterStack.Screen
        name="WorkExperienceSingleScreen"
        component={WorkExperienceSingleScreen}
        options={{ headerShown: false }}
      />
      <RegisterStack.Screen
        name="IndustriesScreen"
        component={IndustriesScreen}
        options={{ headerShown: false }}
      />
      <RegisterStack.Screen
        name="SubmitScreen"
        component={SubmitScreen}
        options={{ headerShown: false }}
      />
      <RegisterStack.Screen
        name="AuthenticatedScreen"
        component={AuthenticatedScreen}
        options={{ headerShown: false }}
      />
    </RegisterStack.Navigator>
  );
};

export default function App() {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </ContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
