import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import COLORS from '../../constants/index';

const Recommended2 = () => {
  return (
    <TouchableOpacity style={[styles.button]} activeOpacity={0.8}>
      <Text style={styles.btnText}>Recommended</Text>
    </TouchableOpacity>
  );
};

export default Recommended2;

const styles = StyleSheet.create({
  button: {
    height: 35,
    borderRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
    elevation: 0,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.primary,
    paddingHorizontal: 10,
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: COLORS.primary,
  },
});
