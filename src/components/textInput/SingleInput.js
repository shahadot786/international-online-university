import {StyleSheet, Dimensions, View, TextInput} from 'react-native';
import React from 'react';
import COLORS from '../../constants/Colors';

const width = Dimensions.get('screen');

const SingleInput = ({
  borderColor,
  color,
  backgroundColor,
  textAlign,
  placeholder,
  secureTextEntry,
}) => {
  return (
    <View style={[styles.container]}>
      {/* <Text style={styles.error}>Valid Email Is Required.</Text> */}
      <TextInput
        style={[
          styles.input,
          {
            borderColor: borderColor,
            textAlign: textAlign,
            width: width.width - 80,
            backgroundColor: backgroundColor,
          },
        ]}
        placeholder={placeholder}
        autoCapitalize="none"
        autoComplete="off"
        keyboardType="default"
        maxLength={72}
        placeholderTextColor={color}
        secureTextEntry={secureTextEntry}
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
    height: 48,
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
