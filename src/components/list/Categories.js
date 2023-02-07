import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import TabBtn from '../button/TabBtn';
import Colors from '../../constants/Colors';

const Categories = () => {
  const data = [
    {
      id: 0,
      subTitle: 'development',
      icon: 'business',
    },
    {
      id: 1,
      subTitle: 'business',
      icon: 'business',
    },
    {
      id: 2,
      subTitle: 'finance & accounting',
      icon: 'business',
    },
    {
      id: 3,
      subTitle: 'it & software',
      icon: 'business',
    },
    {
      id: 4,
      subTitle: 'office productivity',
      icon: 'business',
    },
    {
      id: 5,
      subTitle: 'personal development',
      icon: 'business',
    },
    {
      id: 6,
      subTitle: 'design',
      icon: 'business',
    },
    {
      id: 7,
      subTitle: 'marketing',
      icon: 'business',
    },
    {
      id: 8,
      subTitle: 'lifestyle',
      icon: 'business',
    },
    {
      id: 9,
      subTitle: 'photography & video',
      icon: 'business',
    },
    {
      id: 10,
      subTitle: 'health & fitness',
      icon: 'business',
    },
    {
      id: 11,
      subTitle: 'music',
      icon: 'business',
    },
    {
      id: 12,
      subTitle: 'teaching & academics',
      icon: 'business',
    },
  ];
  const [selectedId, setSelectedId] = useState();
  return (
    <View style={styles.container}>
      {data.map(item => {
        const backgroundColor =
          item.id === selectedId ? Colors.primary : Colors.lightPink;
        const color = item.id === selectedId ? 'white' : COLORS.gray;
        return (
          <TabBtn
            key={item.id}
            onPress={() => setSelectedId(item.id)}
            data={item}
            backgroundColor={backgroundColor}
            color={color}
          />
        );
      })}
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginVertical: 10,
  },
});
