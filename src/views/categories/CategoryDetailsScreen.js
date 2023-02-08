import {StyleSheet, View, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import GlobalStyle from '../../utils/GlobalStyle';
import Heading from '../../components/text/Heading';
import SubHeading from '../../components/text/SubHeading';
import CategorySlider from '../../components/slider/CategorySlider';
import Slider from '../../components/flatlist/Slider';

const CategoryDetailsScreen = ({route, navigation}) => {
  const categoryDetails = route.params.categoryDetails;
  return (
    <SafeAreaView style={[styles.container, GlobalStyle.AndroidSafeArea]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* heading view */}
        <View style={styles.headingView}>
          <Heading color={Colors.black} size={28} textAlign={'left'}>
            {categoryDetails.subTitle}
          </Heading>
          <SubHeading
            color={Colors.black}
            size={20}
            textAlign={'left'}
            bold={'bold'}>
            Courses to get you started
          </SubHeading>
        </View>
        {/* card view */}
        <Slider />
        {/* end card view */}
        {/* heading view */}
        <View style={styles.headingView}>
          <Heading color={Colors.black} size={22} textAlign={'left'}>
            Featured Courses
          </Heading>
        </View>
        {/* card view */}
        <Slider />
        {/* end card view */}
        {/* popular topics */}
        <View style={styles.headingView}>
          <Heading color={Colors.black} size={22} textAlign={'left'}>
            Popular Topics
          </Heading>
        </View>
        <CategorySlider />
        {/* sub categories */}
        <View style={styles.headingView}>
          <Heading color={Colors.black} size={22} textAlign={'left'}>
            Subcategories
          </Heading>
        </View>
        <CategorySlider />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoryDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
    paddingLeft: 20,
  },
  headingView: {
    marginTop: 20,
    gap: 10,
  },
});
