import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import Images from '../../constants/Images';
import Heading from '../../components/text/Heading';
import SubHeading from '../../components/text/SubHeading';
import Header from '../../components/util/Header';
import HomeSlider from '../../components/slider/HomeSlider';
import PromoDialog from '../../components/promotions/PromoDialog';

const Featured = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header />
      <PromoDialog>Future-ready skills on your schedule</PromoDialog>
      <HomeSlider />
    </ScrollView>
  );
};

export default Featured;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 65,
    backgroundColor: Colors.light,
  },
});
