import {Image, StyleSheet, Dimensions, View} from 'react-native';
import React from 'react';
import PlayBtn from '../button/PlayBtn';
import IMAGES from '../../constants/Images';
import {ColorSpace} from 'react-native-reanimated';
import Colors from '../../constants/Colors';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const PreviewVideo = ({image}) => {
  return (
    <View style={styles.container}>
      {/* image */}
      <View style={styles.imageView}>
        <Image style={styles.image} source={image} />
      </View>
      <View style={styles.playBtn}>
        <PlayBtn />
      </View>
    </View>
  );
};

export default PreviewVideo;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView: {
    width: screenWidth,
    height: screenHeight / 4,
    position: 'relative',
    backgroundColor: Colors.black,
    opacity: 0.5,
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  playBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: '50%',
  },
});
