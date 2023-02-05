import {StyleSheet, Text, Pressable} from 'react-native';
import React from 'react';

const SignUpBtn = ({children}) => {
  return (
    <Pressable
      style={({pressed}) => [
        {
          backgroundColor: pressed ? '#E31F26' : '#313131',
        },
        styles.button,
      ]}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default SignUpBtn;

const styles = StyleSheet.create({
  button: {
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
