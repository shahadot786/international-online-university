import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Fonts from '../../constants/Fonts';

const Heading = ({
  children,
  color,
  size,
  textAlign,
  highlightText,
  highlightTextColor,
}) => {
  return (
    <View>
      <Text
        style={[
          styles.heading,
          {color: color, fontSize: size, textAlign: textAlign},
        ]}>
        {children}
        <Text style={{fontSize: size, color: highlightTextColor}}>
          {highlightText}
        </Text>
      </Text>
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  heading: {
    fontFamily: Fonts.InterBold,
    textTransform: 'capitalize',
  },
});
