import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const ExploreBtn = ({children}) => {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.8}>
      <Text style={styles.buttonText}>{children}</Text>
      <Icon name="long-arrow-right" size={18} color="white" />
    </TouchableOpacity>
  );
};

export default ExploreBtn;

const styles = StyleSheet.create({
  button: {
    width: 170,
    height: 43,
    borderRadius: 13,
    backgroundColor: '#E31F26',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
