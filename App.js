import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { MyStack, TabNavigator } from "./navigation/navigator";

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  //  return  <MyStack />;
  return  <TabNavigator />;
}

const styles = StyleSheet.create({

});
