import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const PromoDialog = ({children, onPress}) => {
  const [onClosed, setOnClosed] = useState();
  return (
    <View style={[styles.container, {display: onClosed}]}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
        <Text style={styles.text}>{children}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setOnClosed('none')} activeOpacity={0.5}>
        <Icon name="close" size={28} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
};

export default PromoDialog;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    paddingVertical: 14,
  },
  text: {
    fontSize: 15,
    fontFamily: Fonts.HelveticaRegular,
    color: Colors.white,
  },
});
