import {Text, TouchableHighlight, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Fonts from '../../constants/Fonts';

const IconButton = ({title, backgroundColor, iconName, textColor, onPress}) => {
  return (
    <Icon.Button
      onPress={onPress}
      name={iconName}
      backgroundColor={backgroundColor}>
      <TouchableOpacity activeOpacity={0.4}>
        <Text
          style={{
            fontFamily: Fonts.HelveticaBold,
            fontSize: 14,
            color: textColor,
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </Icon.Button>
  );
};

export default IconButton;
