import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Fonts from '../../constants/Fonts';

const SubHeading = ({children, color, size}) => {
  return (
    <View>
      <Text style={[styles.subHeading, {color: color, fontSize: size}]}>
        {children}
      </Text>
    </View>
  );
};

export default SubHeading;

const styles = StyleSheet.create({
  subHeading: {
    textAlign: 'center',
    marginTop: 5,
    lineHeight: 24,
    fontFamily: Fonts.InterRegular,
  },
});
