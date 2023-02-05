import {StyleSheet, Text, Pressable} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const ExploreBtn = ({children}) => {
  return (
    <Pressable
      style={({pressed}) => [
        {
          backgroundColor: pressed ? '#2D2D2D' : '#E31F26',
        },
        styles.button,
      ]}>
      <Text style={styles.buttonText}>{children}</Text>
      <Icon name="long-arrow-right" size={18} color="white" />
    </Pressable>
  );
};

export default ExploreBtn;

const styles = StyleSheet.create({
  button: {
    width: 170,
    height: 43,
    borderRadius: 13,
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
