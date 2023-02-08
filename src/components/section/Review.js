import {StyleSheet, View} from 'react-native';
import React from 'react';
import Heading from '../text/Heading';
import SubHeading from '../text/SubHeading';
import ReviewSlider from '../flatlist/ReviewSlider';
import Colors from '../../constants/Colors';

const Review = () => {
  return (
    <View style={styles.container}>
      <View>
        <Heading color={Colors.black} size={20} textAlign={'center'}>
          See what our members are saying.
        </Heading>
        <SubHeading color={Colors.black} size={16} textAlign={'center'}>
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
    backgroundColor: Colors.light,
    paddingVertical: 0,
  },
});
