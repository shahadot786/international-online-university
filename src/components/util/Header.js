import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import COLORS from '../../constants/Colors';
import IMAGES from '../../constants/Images';

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={IMAGES.logo} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.light,
    height: 80,
    borderBottomColor: COLORS.secondary,
    borderBottomWidth: 1,
  },
  image: {
    resizeMode: 'cover',
  },
});
