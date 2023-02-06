import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <Text>SignUp</Text>
    </View>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.light,
    flex: 1,
  },
});
