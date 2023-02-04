import {StyleSheet, Image, View, Text} from 'react-native';
import React from 'react';

const Hero = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/hero-logo.png')}
      />
      <Text style={styles.heading}>
        Let's learn from <Text>the experts!</Text>
      </Text>
      <Text style={styles.subHeading}>
        Join <Text style={styles.highlight}>iou</Text> and explore 500+ courses
        All on demand, all for USD 25/year
      </Text>
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
    color: '#212529',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 100,
  },
  subHeading: {
    color: '#313131',
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 50,
    paddingVertical: 20,
    opacity: 1,
  },
  highlight: {
    color: '#E31E25',
    fontWeight: 'bold',
  },
});
