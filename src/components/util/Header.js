import {View, Image, StyleSheet} from 'react-native';
import React from 'react';

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
    backgroundColor: '#f8f8f8',
    height: 80,
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  image: {
    resizeMode: 'cover',
  },
});
