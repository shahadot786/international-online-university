import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
import COLORS from '../../constants/Colors';
import IMAGES from '../../constants/Images';

const Promotion = () => {
  return (
    <View style={styles.imageView}>
      <Image style={styles.image} source={IMAGES.promotion} />
    </View>
  );
};

export default Promotion;

const styles = StyleSheet.create({
  imageView: {
    width: '100%',
    backgroundColor: COLORS.white,
    paddingVertical: 20,
  },
  image: {
    width: '100%',
  },
});
