import {StyleSheet, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import TabBtn2 from '../button/TabBtn2';
import Recommended2 from '../button/Recommended2';

const Tab2 = () => {
  const data = [
    {
      id: 1,
      title: 'Recommended',
    },
    {
      id: 2,
      subTitle: 'Data Science',
    },
    {
      id: 3,
      subTitle: 'UI/UX Design',
    },
    {
      id: 4,
      subTitle: 'Web Design',
    },
    {
      id: 5,
      subTitle: 'Developing',
    },
    {
      id: 6,
      subTitle: 'Finance',
    },
    {
      id: 7,
      subTitle: 'History',
    },
    {
      id: 8,
      subTitle: 'Architect',
    },
  ];
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    const borderBottomColor = item.id === selectedId ? '#E31E25' : '#fff';
    const color = item.id === selectedId ? '#E31E25' : '#8B8B8B';
    return item.id == 1 ? (
      <Recommended2 />
    ) : (
      <TabBtn2
        data={item}
        onPress={() => setSelectedId(item.id)}
        borderBottomColor={borderBottomColor}
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

export default Tab2;
const styles = StyleSheet.create({});
