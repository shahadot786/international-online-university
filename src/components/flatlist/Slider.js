import {StyleSheet, View, FlatList, Animated} from 'react-native';
import React, {useRef, useState} from 'react';
import CourseCard from '../card/CourseCard';
import DotPagination from '../pagination/DotPagination';
import ExploreBtn from '../button/ExploreBtn';
import Images from '../../constants/Images';
import {useNavigation} from '@react-navigation/native';

const Slider = () => {
  const [index, setIndex] = useState(0);
  const courseData = [
    {
      id: 0,
      image: Images.slider02,
      availableCourse: '7 Courses',
      instituteName: 'Daffodil International University',
      heading: 'The Business of Graphic Design: Protect & Perfect Your Passion',
      subHeading: 'Skill Set: Gratitude, Happiness',
      rating: '4.8 (1.2k)',
      student: '2.78k',
      time: '58 hours',
    },
    {
      id: 1,
      image: Images.slider03,
      availableCourse: '17 Courses',
      instituteName: 'Green University of Bangladesh',
      heading: 'The Business of Graphic Design',
      subHeading: 'Skill Set: Gratitude, Happiness',
      rating: '4.8 (1.2k)',
      student: '2.78k',
      time: '58 hours',
    },
    {
      id: 2,
      image: Images.slider04,
      availableCourse: '27 Courses',
      instituteName: 'BRAC International University',
      heading: 'The Business of Web Development',
      subHeading: 'Skill Set: Gratitude, Happiness',
      rating: '4.8 (1.2k)',
      student: '2.78k',
      time: '58 hours',
    },
    {
      id: 3,
      image: Images.slider05,
      availableCourse: '47 Courses',
      instituteName: 'AIUB International University',
      heading: 'The Business of Personal Development',
      subHeading: 'Skill Set: Gratitude, Happiness',
      rating: '4.8 (1.2k)',
      student: '2.78k',
      time: '58 hours',
    },
    {
      id: 4,
      image: Images.card,
      availableCourse: '57 Courses',
      instituteName: 'Harvard International University',
      heading: 'The Business of Robotics',
      subHeading: 'Skill Set: Gratitude, Happiness',
      rating: '4.8 (1.2k)',
      student: '2.78k',
      time: '58 hours',
    },
  ];
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

  const navigation = useNavigation();

  const navigateData = item => {
    navigation.navigate('CourseDetails', {courseDetails: item});
  };

  return (
    <View>
      <View>
        <FlatList
          keyExtractor={item => item.id}
          data={courseData}
          renderItem={({item}) => (
            <CourseCard onPress={() => navigateData(item)} data={item} />
          )}
          horizontal
          pagingEnabled
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          onScroll={handelOnScroll}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
        />
      </View>
      {/* <View>
        <DotPagination data={data} scrollX={scrollX} index={index} />
      </View>
      <View style={styles.button}>
        <ExploreBtn>Explore More</ExploreBtn>
      </View> */}
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: -70,
  },
});
