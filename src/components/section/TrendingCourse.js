import {StyleSheet, View} from 'react-native';
import React from 'react';
import Heading from '../text/Heading';
import SubHeading from '../text/SubHeading';
import Slider from '../flatlist/Slider';
import COLORS from '../../constants/Colors';

const TrendingCourse = () => {
  return (
    <View style={styles.container}>
      {/* heading */}
      <View>
        <Heading color={COLORS.primary} size={18}>
          Explore Our Best Trending Course
        </Heading>
        <SubHeading color={COLORS.black} size={16}>
          Sub Title Goes Here
        </SubHeading>
      </View>
      {/* slider */}
      <View style={styles.slider}>
        <Slider />
      </View>
    </View>
  );
};

export default TrendingCourse;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  slider: {
    marginTop: 20,
  },
});
