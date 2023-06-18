import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, AntDesign, Feather } from '@expo/vector-icons';

const MainStack = createStackNavigator();
const MainTab = createBottomTabNavigator();
import LoginForm from './screens/auth/LoginScreen';
import RegisterForm from './screens/auth/RegistrationScreen';
import PostScreen from './screens/mainScreen/PostsScreen';
import CreatePostScreen from './screens/mainScreen/CreatePostsScreen';
import Profile from './screens/mainScreen/ProfileScreen';
import { View } from 'react-native';

export const useRoute = (isAuth = false) => {
  console.log(isAuth);
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
    <MainTab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          minWidth: 375,
          minHeight: 83,
          paddingTop: 9,
          paddingBottom: 34,
          borderWidth: 1,
          borderTop: 1,
          heigth: 88,
          borderTopWidth: 2,

          // border: 1,
          // borderTopColor: '#BDBDBD',
        },
      }}
      initialRouteName="Posts"
    >
      <MainTab.Screen
        name="Posts"
        component={PostScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({}) => {
            return (
              <MaterialCommunityIcons
                name="view-grid-outline"
                size={24}
                color="rgba(33, 33, 33, 0.8)"
              />
            );
          },
        }}
      />
      <MainTab.Screen
        name="CretePost"
        component={CreatePostScreen}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <View>
                <View
                  style={{
                    width: 70,
                    height: 40,
                    backgroundColor: 'tomato',
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <AntDesign name="plus" size={13} color="#FFFFFF" />
                </View>
              </View>
            );
          },
        }}
      />
      <MainTab.Screen
        name="UserProfile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <Feather name="user" size={24} color="rgba(33, 33, 33, 0.8)" />
            );
          },
        }}
      />
    </MainTab.Navigator>
  );
};
