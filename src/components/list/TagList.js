import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import TagBtn from '../button/TagBtn';
import Colors from '../../constants/Colors';

const TagList = () => {
  const data = [
    {
      id: 0,
      title: 'python',
    },
    {
      id: 1,
      title: 'java',
    },
    {
      id: 2,
      title: 'javascript',
    },
    {
      id: 3,
      title: 'excel',
    },
    {
      id: 4,
      title: 'sql',
    },
    {
      id: 5,
      title: 'aws',
    },
    {
      id: 6,
      title: 'digital marketing',
    },
    {
      id: 7,
      title: 'react',
    },
    {
      id: 8,
      title: 'c#',
    },
    {
      id: 9,
      title: 'business',
    },
    {
      id: 10,
      title: 'marketing',
    },
    {
      id: 11,
      title: 'artificial intelligence',
    },
  ];
  const [selectedId, setSelectedId] = useState();
  return (
    <View style={styles.tagList}>
      {data.map(item => {
        const backgroundColor =
          item.id === selectedId ? Colors.primary : Colors.light;
        const color = item.id === selectedId ? 'white' : Colors.black;
        const border = item.id === selectedId ? 0 : 1;
        return (
          <TagBtn
            onPress={() => setSelectedId(item.id)}
            key={item.id}
            border={border}
            color={color}
            backgroundColor={backgroundColor}>
            {item.title}
          </TagBtn>
        );
      })}
    </View>
  );
};

export default TagList;

const styles = StyleSheet.create({
  tagList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
});
