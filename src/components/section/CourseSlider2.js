import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import Heading from '../text/Heading';
import SubHeading from '../text/SubHeading';
import Slider from '../flatlist/Slider';
import COLORS from '../../constants/index';

const CourseSlider2 = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../../../assets/success.jpg')}
        resizeMode="cover">
        <View style={styles.overly}>
          <View style={styles.heading}>
            <Heading color={COLORS.white} size={20}>
              Master's and Bachelor's Degrees
            </Heading>
          </View>
          <View style={styles.subHeading}>
            <SubHeading color={COLORS.white} size={14}>
              Find a top degree that fits your life Breakthrough pricing on 100%
              online degrees from top universities.
            </SubHeading>
          </View>
          <Slider />
        </View>
      </ImageBackground>
    </View>
  );
};

export default CourseSlider2;

const styles = StyleSheet.create({
  container: {
    height: 800,
    paddingBottom: 100,
    width: '100%',
    flex: 1,
  },
  overly: {
    height: '100%',
    backgroundColor: COLORS.black,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  heading: {
    marginTop: 25,
  },
  subHeading: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 60,
    marginBottom: 25,
  },
});
