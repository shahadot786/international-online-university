import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const SingleInput = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.error}>Valid Email Is Required.</Text> */}
      <TextInput
        editable
        style={styles.input}
        placeholder="Your Email Address"
        autoCapitalize="none"
        autoComplete="email"
        keyboardType="email-address"
        maxLength={50}
      />
    </View>
  );
};

export default SingleInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 320,
    height: 40,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#E31F26',
    paddingLeft: 15,
    opacity: 1,
  },
  error: {
    color: '#E31F26',
    textAlign: 'left',
    marginBottom: 10,
  },
});
