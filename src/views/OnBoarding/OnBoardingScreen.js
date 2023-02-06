import {StyleSheet, View, Image, Text, Pressable} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import Images from '../../constants/Images';
import COLORS from '../../constants/index';
import Fonts from '../../constants/Fonts';
import {useNavigation} from '@react-navigation/native';

const OnBoardingScreen = () => {
  const navigation = useNavigation();
  const data = [
    {
      backgroundColor: COLORS.light,
      image: <Image style={styles.image} source={Images.lecture} />,
      title: 'Welcome',
      subtitle: 'Welcome to the IOU ',
    },
    {
      backgroundColor: COLORS.light,
      image: <Image style={styles.image} source={Images.mortarboard} />,
      title: 'Explore',
      subtitle: 'Explore our 10,000+ courses.',
    },
    {
      backgroundColor: COLORS.light,
      image: <Image style={styles.image} source={Images.onlineCourse} />,
      title: 'All Done',
      subtitle: 'Get your certificate & job.',
      //   titleStyles: {color: 'red'},
      //   subTitleStyles: {color: 'red'},
    },
  ];
  //end data
  const Dots = ({selected}) => {
    let backgroundColor;
    backgroundColor = selected ? COLORS.secondary : COLORS.black;
    return (
      <View
        style={{
          width: 12,
          height: 12,
          marginHorizontal: 3,
          borderRadius: 6,
          backgroundColor,
        }}
      />
    );
  };
  //end dots
  const Browse = ({...props}) => {
    return (
      <Pressable {...props}>
        <Text style={styles.text}>Browse</Text>
      </Pressable>
    );
  };
  const Next = ({...props}) => {
    return (
      <Pressable {...props}>
        <Text style={styles.text}>Next</Text>
      </Pressable>
    );
  };
  const SignIn = ({...props}) => {
    return (
      <Pressable {...props}>
        <Text style={styles.text}>Sign In</Text>
      </Pressable>
    );
  };
  return (
    <View style={styles.container}>
      <Onboarding
        onSkip={() => navigation.replace('BottomTab')}
        onDone={() => navigation.replace('SignIn')}
        DotComponent={Dots}
        NextButtonComponent={Next}
        SkipButtonComponent={Browse}
        DoneButtonComponent={SignIn}
        pages={data}
        bottomBarColor={COLORS.primary}
        titleStyles={{color: COLORS.black, fontFamily: Fonts.InterBold}}
        subTitleStyles={{
          color: COLORS.black,
          fontFamily: Fonts.InterRegular,
          marginHorizontal: 40,
        }}
      />
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomBar: {
    backgroundColor: COLORS.black,
    color: COLORS.white,
  },
  image: {
    width: 150,
    height: 150,
  },
  text: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: Fonts.InterBold,
    marginHorizontal: 18,
  },
});
