import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import React from 'react';

import PostScreen from '../screens/mainScreen/PostsScreen';
import CreatePostScreen from '../screens/mainScreen/CreatePostsScreen';
import Profile from '../screens/mainScreen/ProfileScreen';

const MainTab = createBottomTabNavigator();

export default function HomePage({ navigation }) {
  return (
    <NavigationContainer>
      <MainTab.Navigator>
        <MainTab.Screen name="" component={PostScreen} />
        <MainTab.Screen name="" component={CreatePostScreen} />
        <MainTab.Screen name="" component={Profile} />
      </MainTab.Navigator>
    </NavigationContainer>
  );
}
