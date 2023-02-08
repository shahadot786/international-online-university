import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/Colors';

const PlayBtn = () => {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.8}>
      <Icon name="caret-forward-outline" size={40} color={Colors.primary} />
    </TouchableOpacity>
  );
};

export default PlayBtn;

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 36,
    backgroundColor: Colors.lightPink,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
