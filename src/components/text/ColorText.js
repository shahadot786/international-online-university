import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Fonts from '../../constants/Fonts';

const ColorText = ({children, color, size}) => {
  return (
    <View>
      <Text style={[styles.text, {color: color, fontSize: size}]}>
        {children}
      </Text>
    </View>
  );
};

export default ColorText;

const styles = StyleSheet.create({
  text: {
    fontFamily: Fonts.InterBold,
  },
});
