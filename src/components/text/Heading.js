import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Fonts from '../../constants/Fonts';

const Heading = ({children, color, size, textAlign}) => {
  return (
    <View>
      <Text
        style={[
          styles.heading,
          {color: color, fontSize: size, textAlign: textAlign},
        ]}>
        {children}
      </Text>
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  heading: {
    fontFamily: Fonts.InterBold,
  },
});
