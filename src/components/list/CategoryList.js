import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Data from '../../constants/Data';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const CategoryList = () => {
  const [selectedId, setSelectedId] = useState();
  return (
    <View style={styles.container}>
      {Data.map(item => {
        const color = item.id === selectedId ? Colors.primary : Colors.darkGray;
        return (
          <TouchableOpacity
            key={item.id}
            onPress={() => setSelectedId(item.id)}
            style={styles.categories}
            activeOpacity={0.4}>
            <Icon name={item.iconName} size={22} color={color} />
            <Text style={[styles.text, {color: color}]}>{item.subTitle}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 8,
  },
  categories: {
    flexDirection: 'row',
    gap: 18,
    marginTop: 25,
  },
  text: {
    fontSize: 13,
    fontFamily: Fonts.InterBold,
    textTransform: 'capitalize',
  },
});
