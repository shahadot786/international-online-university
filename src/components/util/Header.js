import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import COLORS from '../../constants/index';

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require('../../../assets/diu-logo.png')}
        />
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
    paddingBottom: 20,
  },
  image: {
    resizeMode: 'cover',
  },
});
