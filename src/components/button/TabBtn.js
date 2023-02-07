import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Fonts from '../../constants/Fonts';

const TabBtn = ({onPress, color, backgroundColor, data}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, {backgroundColor: backgroundColor}]}
      activeOpacity={1}>
      <View>
        <Icon name={data.iconName} size={24} color={color} />
      </View>
      <View>
        {data.title && (
          <Text style={[styles.text1, {color: color}]}>{data.title}</Text>
        )}
        {data.subTitle && (
          <Text style={[styles.text2, {color: color}]}>{data.subTitle}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default TabBtn;

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    marginHorizontal: 5,
    marginVertical: 5,
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  text1: {
    fontSize: 13,
    textTransform: 'capitalize',
    fontFamily: Fonts.InterRegular,
  },
  text2: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    fontFamily: Fonts.InterBold,
  },
});
