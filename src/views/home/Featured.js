import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import Images from '../../constants/Images';
import Heading from '../../components/text/Heading';
import SubHeading from '../../components/text/SubHeading';
import Header from '../../components/util/Header';
import HomeSlider from '../../components/slider/HomeSlider';
import PromoDialog from '../../components/promotions/PromoDialog';
import Categories from '../../components/list/Categories';
import Data from '../../constants/Data';
import TabBtn from '../../components/button/TabBtn';

const Featured = () => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = item => {
    const backgroundColor =
      item.id === selectedId ? Colors.primary : Colors.lightPink;
    const color = item.id === selectedId ? 'white' : Colors.gray;
    return (
      <TabBtn
        data={item}
        backgroundColor={backgroundColor}
        color={color}
        onPress={() => setSelectedId(item.id)}
      />
    );
  };
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header />
      <PromoDialog>Future-ready skills on your schedule</PromoDialog>
      <HomeSlider />
      <View style={styles.contentView}>
        <Heading color={Colors.black} size={28} textAlign={'left'}>
          Learning that fits
        </Heading>
        <SubHeading color={Colors.darkGray} size={15} textAlign={'left'}>
          Skills for your present(and future)
        </SubHeading>
        <View style={styles.catView}>
          <Heading color={Colors.black} size={22} textAlign={'left'}>
            Categories
          </Heading>
          <TouchableOpacity activeOpacity={0.5}>
            <Text style={styles.catText}>See all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <FlatList
            data={Data}
            keyExtractor={item => item.id}
            numColumns={Math.ceil(Data.length / 2)}
            renderItem={({item}) => renderItem(item)}
          />
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Featured;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 65,
    backgroundColor: Colors.light,
    marginBottom: 65,
  },
  contentView: {
    marginLeft: 20,
    marginVertical: 20,
  },
  catView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  catText: {
    marginRight: 15,
    color: Colors.blue,
    fontSize: 13,
    fontFamily: Fonts.InterBold,
  },
});
