import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import COLORS from '../../constants/index';

const GetStartedBtn = ({children, backgroundColor}) => {
  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <Pressable
        style={({pressed}) => [
          {
            backgroundColor: pressed ? COLORS.black : COLORS.primary,
          },
          styles.button,
        ]}>
        <Text style={styles.btnText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default GetStartedBtn;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  button: {
    width: 320,
    height: 40,
    borderRadius: 6,
    opacity: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    opacity: 1,
    fontWeight: 'bold',
  },
});
