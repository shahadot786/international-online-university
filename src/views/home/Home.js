import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import Header from '../../components/util/Header';
import Hero from '../../components/util/Hero';
import SingleInput from '../../components/textInput/SingleInput';
import GetStartedBtn from '../../components/button/GetStartedBtn';
import CourseList from '../../components/list/CourseList';
import TrendingCourse from '../../components/section/TrendingCourse';
import Promotion from '../../components/section/Promotion';
import Explore from '../../components/section/Explore';
import Videos from '../../components/section/Videos';
import Pathway from '../../components/section/Pathway';
import CourseSlider2 from '../../components/section/CourseSlider2';
import Review from '../../components/section/Review';
import LearnMore from '../../components/section/LearnMore';
import Faq from '../../components/section/Faq';
import Newsletter from '../../components/section/Newsletter';
import COLORS from '../../constants/Colors';

const Home = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header />
      <Hero />
      <SingleInput
        borderColor={COLORS.primary}
        backgroundColor={COLORS.white}
        placeholder={'Your Email Address'}
      />
      <GetStartedBtn backgroundColor={COLORS.white}>Get Started</GetStartedBtn>
      <CourseList />
      <TrendingCourse />
      {/* <Promotion />
      <Explore />
      <Videos />
      <Pathway />
      <CourseSlider2 />
      <Review />
      <LearnMore />
      <Faq />
      <Newsletter /> */}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 65,
  },
});
