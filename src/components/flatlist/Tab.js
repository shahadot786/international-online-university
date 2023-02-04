import {StyleSheet, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import TabBtn from '../button/TabBtn';
import Recommended from '../button/Recommended';

const Tab = () => {
  const data = [
    {
      id: 1,
      title: 'Recommended',
    },
    {
      id: 2,
      title: '678 Courses',
      subTitle: 'Data Science',
    },
    {
      id: 3,
      title: '678 Courses',
      subTitle: 'UI/UX Design',
    },
    {
      id: 4,
      title: '678 Courses',
      subTitle: 'Web Design',
    },
    {
      id: 5,
      title: '678 Courses',
      subTitle: 'Developing',
    },
    {
      id: 6,
      title: '678 Courses',
      subTitle: 'Finance',
    },
    {
      id: 7,
      title: '678 Courses',
      subTitle: 'History',
    },
    {
      id: 8,
      title: '678 Courses',
      subTitle: 'Architect',
    },
  ];
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#E31E25' : '#EFEAEA';
    const color = item.id === selectedId ? 'white' : '#9D9D9D';
    return item.id == 1 ? (
      <Recommended />
    ) : (
      <TabBtn
        data={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        color={color}
      />
    );
  };
  return (
    <View>
      <FlatList
        data={data}
        key={data}
        horizontal
        onPress={() => setSelectedId(item.id)}
        renderItem={({item}) => renderItem({item})}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Tab;

const styles = StyleSheet.create({});
