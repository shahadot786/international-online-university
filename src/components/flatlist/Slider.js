import {StyleSheet, View, FlatList, Animated} from 'react-native';
import React, {useRef, useState} from 'react';
import CourseCard from '../card/CourseCard';
import DotPagination from '../pagination/DotPagination';
import ExploreBtn from '../button/ExploreBtn';

const Slider = () => {
  const [index, setIndex] = useState(0);
  const data = [1, 2, 3, 4, 5];
  const scrollX = useRef(new Animated.Value(0)).current;
  const handelOnScroll = event => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  const onViewableItemsChanged = useRef(({viewableItems}) => {
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          key={data}
          data={data}
          renderItem={() => <CourseCard />}
          horizontal
          pagingEnabled
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          onScroll={handelOnScroll}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
        />
      </View>
      <View>
        <DotPagination data={data} scrollX={scrollX} index={index} />
      </View>
      <View style={styles.button}>
        <ExploreBtn>Explore More</ExploreBtn>
      </View>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom:-70
  },
});
