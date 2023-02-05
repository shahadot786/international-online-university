import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import COLORS from '../../constants/index';

const SingleInput = ({borderColor, color, backgroundColor, textAlign}) => {
  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      {/* <Text style={styles.error}>Valid Email Is Required.</Text> */}
      <TextInput
        editable
        style={[styles.input, {borderColor: borderColor, textAlign: textAlign}]}
        placeholder="Your Email Address"
        autoCapitalize="none"
        autoComplete="email"
        keyboardType="email-address"
        maxLength={50}
        placeholderTextColor={color}
      />
    </View>
  );
};

export default SingleInput;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  input: {
    width: 320,
    height: 40,
    borderRadius: 6,
    borderWidth: 1,
    paddingLeft: 15,
    opacity: 1,
  },
  error: {
    color: COLORS.primary,
    textAlign: 'left',
    marginBottom: 10,
  },
});
