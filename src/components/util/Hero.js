import {StyleSheet, Image, View, Text} from 'react-native';
import React from 'react';
import Heading from '../text/Heading';
import SubHeading from '../text/SubHeading';
import COLORS from '../../constants/Colors';
import IMAGES from '../../constants/Images';

const Hero = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={IMAGES.hero} />
      <View style={styles.heading}>
        <Heading color={COLORS.black} size={26}>
          Let's learn from the experts!
        </Heading>
      </View>
      <View style={styles.subHeading}>
        <SubHeading color={COLORS.black} size={18}>
          Join iou and explore 500+ courses All on demand, all for USD 25/year
        </SubHeading>
      </View>
    </View>
  );
};

export default Hero;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginTop: 30,
    marginBottom: 20,
  },
  heading: {
    paddingHorizontal: 100,
  },
  subHeading: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  highlight: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
});
