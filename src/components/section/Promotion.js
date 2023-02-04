import {StyleSheet, Image, View} from 'react-native';
import React from 'react';

const Promotion = () => {
  return (
    <View style={styles.imageView}>
      <Image
        style={styles.image}
        source={require('../../../assets/promotion.png')}
      />
    </View>
  );
};

export default Promotion;

const styles = StyleSheet.create({
  imageView: {
    width: '100%',
    backgroundColor: '#FFF',
    paddingVertical: 20,
  },
  image: {
    width: '100%',
  },
});
