import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const TabBtn2 = ({onPress, color, borderBottomColor, data}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, {borderBottomColor: borderBottomColor}]}
      activeOpacity={0.8}>
      <View>
        <Text style={[styles.text2, {color: color}]}>{data.subTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TabBtn2;

const styles = StyleSheet.create({
  button: {
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#E31E25',
    paddingHorizontal: 10,
  },
  text2: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#E31E25',
  },
});
