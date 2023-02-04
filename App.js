import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import Home from './src/views/home/Home';
import GlobalStyle from './src/utils/GlobalStyle';

const App = () => {
  return (
    <SafeAreaView style={[styles.container, GlobalStyle.AndroidSafeArea]}>
      <StatusBar backgroundColor="#1b1a1a" />
      <Home />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f8f8f8'
  },
});
