import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const GetStartedBtn = ({children}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <Text style={styles.btnText}>{children}</Text>
      </TouchableOpacity>
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
    backgroundColor: '#E31E25',
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
