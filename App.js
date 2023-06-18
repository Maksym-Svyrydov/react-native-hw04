import { NavigationContainer } from '@react-navigation/native';

import 'react-native-gesture-handler';
import React from 'react';
import { useRoute } from './router';
export default function App() {
  const routing = useRoute();
  return <NavigationContainer>{routing}</NavigationContainer>;
}
