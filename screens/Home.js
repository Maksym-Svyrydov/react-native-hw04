import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import React from 'react';
import { MaterialCommunityIcons, AntDesign, Feather } from '@expo/vector-icons';
import { HeaderBackButton } from '@react-navigation/elements';
import PostScreen from '../screens/mainScreen/PostsScreen';
import CreatePostScreen from '../screens/mainScreen/CreatePostsScreen';
import Profile from '../screens/mainScreen/ProfileScreen';

const MainTab = createBottomTabNavigator();

export default function HomePage({ navigation }) {
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
          title: 'Публікації',
          headerShown: true,
          headerStyle: {},

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
          title: 'Створити публикацію',
          tabBarShowLabel: false,
          headerShown: true,
          headerLeft: () => (
            <HeaderBackButton
              label="Hello"
              onPress={() => navigation.navigate('Posts')}
            />
          ),
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
}
