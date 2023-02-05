import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const SignUpBtn = ({children}) => {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.8}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default SignUpBtn;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#313131',
    width: 276,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginVertical: 16,
  },
  text: {
    color: '#FFF',
    fontSize: 18,
  },
});
