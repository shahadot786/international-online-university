import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';

const GetStartedBtn = ({children}) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#2D2D2D' : '#E31E25',
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
    backgroundColor: 'white',
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
