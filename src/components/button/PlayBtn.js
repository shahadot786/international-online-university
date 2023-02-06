import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../../constants/Colors';

const PlayBtn = () => {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.8}>
      <Icon name="caret-forward-outline" size={50} color={COLORS.black} />
    </TouchableOpacity>
  );
};

export default PlayBtn;

const styles = StyleSheet.create({
  button: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: COLORS.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
