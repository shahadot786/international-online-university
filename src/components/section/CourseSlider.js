import {StyleSheet, View} from 'react-native';
import React from 'react';
import Tab2 from '../flatlist/Tab2';
import Slider from '../flatlist/Slider';

const CourseSlider = () => {
  return (
    <View style={styles.slider}>
      <View style={styles.tabList}>
        <Tab2 />
      </View>
      <Slider />
    </View>
  );
};

export default CourseSlider;

const styles = StyleSheet.create({
  tabList: {
    marginHorizontal: 25,
    marginBottom: 30,
  },
  slider: {},
});
