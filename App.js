import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import Home from './src/views/home/Home';
import GlobalStyle from './src/utils/GlobalStyle';
import COLORS from './src/constants/index';

const App = () => {
  return (
    <SafeAreaView style={[styles.container, GlobalStyle.AndroidSafeArea]}>
      <StatusBar backgroundColor={COLORS.black} />
      <Home />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light,
  },
});
