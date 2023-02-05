import {StyleSheet, Text, Pressable} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import COLORS from '../../constants/index';

const ExploreBtn = ({children}) => {
  return (
    <Pressable
      style={({pressed}) => [
        {
          backgroundColor: pressed ? COLORS.black : COLORS.primary,
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
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
