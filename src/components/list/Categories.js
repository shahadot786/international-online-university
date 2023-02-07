import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import TabBtn from '../button/TabBtn';
import Colors from '../../constants/Colors';
import Data from '../../constants/Data';
const Categories = () => {
  const [selectedId, setSelectedId] = useState();
  return (
    <View style={styles.container}>
      {Data.map(item => {
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
