import {StyleSheet, Animated, View, Dimensions} from 'react-native';
import React from 'react';
import COLORS from '../../constants/Colors';

const {width} = Dimensions.get('screen');

const DotPagination = ({data, scrollX, index}) => {
  return (
    <View style={styles.container}>
      {data.map((_, idx) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [20, 20, 20],
          extrapolate: 'clam',
        });

        return (
          <Animated.View
            key={idx.toString()}
            style={[
              styles.dot,
              {width: dotWidth},
              idx === index && styles.dotActive,
            ]}></Animated.View>
        );
      })}
    </View>
  );
};

export default DotPagination;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: -40,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginHorizontal: 2,
    backgroundColor: COLORS.gray,
  },
  dotActive: {
    backgroundColor: COLORS.primary,
  },
});
