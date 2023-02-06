import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text>SignIn</Text>
    </View>
  );
};

export default SignIn;
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.light,
    flex: 1,
  },
});