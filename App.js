import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Constants from 'expo-constants'
import { StyleSheet, View, Image } from 'react-native';

import Header from './components/Header';
import Stories from './components/Stories';
import Feed from './components/Feed';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header/>      
      <Feed/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  }
});
