import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Fonts from '../../constants/Fonts';

const SubHeading = ({children, color, size, textAlign, bold}) => {
  return (
    <View>
      <Text
        style={[
          styles.subHeading,
          {
            color: color,
            fontSize: size,
            textAlign: textAlign,
            fontWeight: bold,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

export default SubHeading;

const styles = StyleSheet.create({
  subHeading: {
    marginTop: 5,
    lineHeight: 24,
    fontFamily: Fonts.InterRegular,
  },
});
