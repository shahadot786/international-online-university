import {StyleSheet, Image, View, Text} from 'react-native';
import React from 'react';
import Heading from '../text/Heading';
import SubHeading from '../text/SubHeading';

const Hero = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/hero-logo.png')}
      />
      <View style={styles.heading}>
        <Heading color={'#212529'} size={26}>
          Let's learn from the experts!
        </Heading>
      </View>
      <View style={styles.subHeading}>
        <SubHeading color={'#313131'} size={18}>
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
  },
  highlight: {
    color: '#E31E25',
    fontWeight: 'bold',
  },
});
