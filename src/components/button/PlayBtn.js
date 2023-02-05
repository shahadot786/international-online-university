import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const PlayBtn = () => {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.8}>
      <Icon name="caret-forward-outline" size={50} color="#0400009D" />
    </TouchableOpacity>
  );
};

export default PlayBtn;

const styles = StyleSheet.create({
  button: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#ffffff46',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
