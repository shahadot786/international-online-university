import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import Heading from '../text/Heading';
import SubHeading from '../text/SubHeading';
import PathwayList from '../list/PathwayList';
import ExploreBtn from '../button/ExploreBtn';
import CourseSlider from './CourseSlider';
import COLORS from '../../constants/index';
import IMAGES from '../../constants/Images';

const width = Dimensions.get('screen');

const Pathway = () => {
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Heading color={COLORS.black} size={24}>
          IOU Career Pathway
        </Heading>
        <SubHeading color={COLORS.black} size={18}>
          A bundle of course to become the master
        </SubHeading>
      </View>
      {/* Image */}
      <View style={[styles.imageView, {width: width.width - 80}]}>
        <Image
          style={styles.image}
          source={IMAGES.pathway}
        />
      </View>
      <View>
        <PathwayList />
      </View>
      <View style={styles.button}>
        <ExploreBtn>Explore Your Future</ExploreBtn>
      </View>
      <CourseSlider />
    </View>
  );
};

export default Pathway;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    paddingTop: 55,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView: {
    marginVertical: 45,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: 329,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    resizeMode: 'cover',
  },
  button: {
    marginLeft: 40,
    marginVertical: 40,
  },
});
