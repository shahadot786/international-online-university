import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Heading from '../text/Heading';
import SubHeading from '../text/SubHeading';
import Slider from '../flatlist/Slider';
import ReviewSlider from '../flatlist/ReviewSlider';

const Review = () => {
  return (
    <View style={styles.container}>
      <View>
        <Heading color={'#001514'} size={20}>
          See what our members are saying.
        </Heading>
        <SubHeading color={'#001514'} size={16}>
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
    backgroundColor: '#FFFFFF',
    paddingVertical: 25,
  },
});
