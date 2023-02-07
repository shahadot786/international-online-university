import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const TagBtn = ({children, onPress, color, backgroundColor, borderColor}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[
        styles.btn,
        {backgroundColor: backgroundColor, borderColor: borderColor},
      ]}>
      <Text style={[styles.btnText, {color: color}]}>{children}</Text>
    </TouchableOpacity>
  );
};

export default TagBtn;

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
    borderWidth:1
  },
  btnText: {
    textAlign: 'center',
    fontFamily: Fonts.InterBold,
    fontSize: 14,
    textTransform: 'lowercase',
  },
});
