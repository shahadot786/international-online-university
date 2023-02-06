import {StyleSheet, Text, Pressable} from 'react-native';
import React from 'react';
import COLORS from '../../constants/Colors';

const SignUpBtn = ({children}) => {
  return (
    <Pressable
      style={({pressed}) => [
        {
          backgroundColor: pressed ? COLORS.primary : COLORS.black,
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
    color: 'white',
    fontSize: 18,
  },
});
