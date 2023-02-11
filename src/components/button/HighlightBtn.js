import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const HighlightBtn = ({title}) => {
  return (
    <View style={styles.tag}>
      <Text style={styles.tagText}>{title}</Text>
    </View>
  );
};

export default HighlightBtn;

const styles = StyleSheet.create({
  tag: {
    backgroundColor: Colors.yellow,
    height: 30,
    width: 120,
    borderRadius: 4,
    paddingVertical: 5,
    marginTop: 5,
  },
  tagText: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: Fonts.InterBold,
    color: Colors.black,
  },
});
