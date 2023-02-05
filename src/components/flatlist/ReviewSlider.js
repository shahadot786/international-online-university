import {StyleSheet, FlatList, View, Animated} from 'react-native';
import React, {useState, useRef} from 'react';
import ReviewCard from '../card/ReviewCard';
import DotPagination from '../pagination/DotPagination';

const avatar = require('../../../assets/avatar.png');

const ReviewSlider = () => {
  const data = [
    {
      id: 1,
      image: avatar,
      name: 'md shahadot hossain',
      country: 'usa',
      review:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,',
    },
    {
      id: 2,
      image: avatar,
      name: 'user name',
      country: 'usa',
      review:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,',
    },
    {
      id: 3,
      image: avatar,
      name: 'user name',
      country: 'usa',
      review:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,',
    },
    {
      id: 4,
      image: avatar,
      name: 'user name',
      country: 'usa',
      review:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,',
    },
    {
      id: 5,
      image: avatar,
      name: 'user name',
      country: 'usa',
      review:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,',
    },
  ];
  const [index, setIndex] = useState(0);
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
    <View style={styles.reviews}>
      <FlatList
        horizontal
        data={data}
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handelOnScroll}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        keyExtractor={item => item.id}
        renderItem={item => <ReviewCard data={item} />}
      />
      <View>
        <DotPagination data={data} scrollX={scrollX} index={index} />
      </View>
    </View>
  );
};

export default ReviewSlider;

const styles = StyleSheet.create({
  reviews: {
    marginVertical: 60,
    flex: 1,
  },
});
