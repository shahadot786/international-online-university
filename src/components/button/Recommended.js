import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Recommended = () => {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.8}>
      <Text style={styles.btnText}>Recommended</Text>
    </TouchableOpacity>
  );
};

export default Recommended;

const styles = StyleSheet.create({
  button: {
    width: 165,
    height: 65,
    backgroundColor: '#E31E25',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
    elevation: 4,
  },
  btnText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
