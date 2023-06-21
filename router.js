import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const MainStack = createStackNavigator();

import LoginForm from './screens/auth/LoginScreen';
import RegisterForm from './screens/auth/RegistrationScreen';

import HomePage from './screens/Home';

export const useRoute = (isAuth = false) => {
  if (!isAuth) {
    return (
      <MainStack.Navigator name="Auth" initialRouteName="Login">
        <MainStack.Screen
          name="Registration"
          component={RegisterForm}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginForm}
          options={{
            headerShown: false,
          }}
        />
      </MainStack.Navigator>
    );
  }
  return (
    <MainStack.Navigator name="Home" initialRouteName="Posts">
      <MainStack.Screen
        name="Posts"
        component={HomePage}
        options={{
          headerShown: false,
        }}
      />
    </MainStack.Navigator>
  );
};
