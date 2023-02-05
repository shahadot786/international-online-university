import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PlayBtn from '../button/PlayBtn';
import Heading from '../text/Heading';
import SubHeading from '../text/SubHeading';
import SignUpBtn from '../button/SignUpBtn';
import COLORS from '../../constants/index';

const Videos = () => {
  return (
    <View style={styles.container}>
      {/* image */}
      <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={require('../../../assets/teaching.png')}
        />
        <View style={styles.playBtn}>
          <PlayBtn />
        </View>
      </View>
      {/* content */}
      <View style={styles.contentView}>
        <Heading color={COLORS.white} size={24}>
          Start your journey today.
        </Heading>
        <View style={styles.subHeading}>
          <SubHeading color={COLORS.white} size={16}>
            Join iou and explore 500+ courses Choose from 3 plans. Starting at
            $15/month.
          </SubHeading>
        </View>
        <SignUpBtn>Sing Up Now</SignUpBtn>
      </View>
    </View>
  );
};

export default Videos;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView: {
    width: '100%',
    height: 270,
    position: 'relative',
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  playBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: '60%',
  },
  contentView: {
    backgroundColor: COLORS.primary,
    height: 220,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subHeading: {
    paddingHorizontal: 50,
  },
});
