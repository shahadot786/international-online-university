import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const HighlightBtn = ({title}) => {
  return (
    <View>
      <Text style={styles.tag}>{title}</Text>
    </View>
  );
};

export default HighlightBtn;

const styles = StyleSheet.create({
  tag: {
    backgroundColor: Colors.darkGray,
    height: 30,
    width: 120,
    textAlign: 'center',
    fontSize: 14,
    fontFamily: Fonts.InterBold,
    color: Colors.white,
    borderRadius: 4,
    paddingVertical: 5,
    marginTop: 2,
  },
});
