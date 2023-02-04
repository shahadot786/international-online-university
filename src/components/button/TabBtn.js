import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const TabBtn = ({onPress, color, backgroundColor, data}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, {backgroundColor: backgroundColor}]}
      activeOpacity={0.8}>
      <View>
        <Icon name="code" size={24} color={color} />
      </View>
      <View>
        <Text style={[styles.text1, {color: color}]}>{data.title}</Text>
        <Text style={[styles.text2, {color: color}]}>{data.subTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TabBtn;

const styles = StyleSheet.create({
  button: {
    width: 165,
    height: 65,
    borderRadius: 12,
    marginHorizontal: 10,
    marginVertical: 10,
    flexDirection: 'row',
    gap: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  btnText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  text1: {
    fontSize: 13,
  },
  text2: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
