import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import COLORS from '../../constants/index';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.light,
    flex: 1,
  },
});
