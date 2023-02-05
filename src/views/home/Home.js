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
import CourseSlider from '../../components/section/CourseSlider';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Hero />
      <SingleInput />
      <GetStartedBtn>Get Started</GetStartedBtn>
      <CourseList />
      <TrendingCourse />
      <Promotion />
      <Explore />
      <Videos />
      <Pathway />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
