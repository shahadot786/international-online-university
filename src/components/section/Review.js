import {StyleSheet, View} from 'react-native';
import React from 'react';
import Heading from '../text/Heading';
import SubHeading from '../text/SubHeading';
import ReviewSlider from '../flatlist/ReviewSlider';
import COLORS from '../../constants/Colors';

const Review = () => {
  return (
    <View style={styles.container}>
      <View>
        <Heading color={COLORS.black} size={20}>
          See what our members are saying.
        </Heading>
        <SubHeading color={COLORS.black} size={16}>
          Sub Title Goes Here
        </SubHeading>
      </View>
      <View>
        <ReviewSlider />
      </View>
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingVertical: 25,
  },
});
