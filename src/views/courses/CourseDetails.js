import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  Text,
  Dimensions,
} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import GlobalStyle from '../../utils/GlobalStyle';
import PreviewVideo from '../../components/videos/PreviewVideo';
import Heading from '../../components/text/Heading';
import SubHeading from '../../components/text/SubHeading';
import Icon from 'react-native-vector-icons/Ionicons';
import Fonts from '../../constants/Fonts';
import HighlightBtn from '../../components/button/HighlightBtn';
import GetStartedBtn from '../../components/button/GetStartedBtn';
import CategorySlider from '../../components/slider/CategorySlider';
import TrendingCourse from '../../components/section/TrendingCourse';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const CourseDetails = ({route, navigation}) => {
  const courseData = route.params.courseDetails;

  return (
    <SafeAreaView style={[styles.container, GlobalStyle.AndroidSafeArea]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.videoPreview}>
          <PreviewVideo image={courseData.image} />
        </View>
        <View style={styles.contentView}>
          <Heading color={Colors.black} size={22} textAlign={'center'}>
            {courseData.heading}
          </Heading>
          <SubHeading color={Colors.darkGray} size={14} textAlign={'center'}>
            {courseData.subHeading}
          </SubHeading>
          <SubHeading color={Colors.darkGray} size={14} textAlign={'center'}>
            {courseData.instituteName}
          </SubHeading>
          <View style={styles.footer}>
            <Icon name="star" size={16} color={Colors.yellow} />
            <Text style={styles.footerText}>{courseData.rating}</Text>
            <Icon name="people-outline" size={16} color={Colors.black} />
            <Text style={styles.footerText}>{courseData.student}</Text>
            <Icon name="time-outline" size={16} color={Colors.black} />
            <Text style={styles.footerText}>{courseData.time}</Text>
          </View>
          <HighlightBtn title={courseData.tag} />
          <GetStartedBtn>Start Now</GetStartedBtn>
          <Text style={styles.priceViewText}>
            Starting at {courseData.price}/month (billed annually) for all
            classes and sessions
          </Text>
        </View>
        <View style={styles.categoryView}>
          <Heading color={Colors.black} size={22} textAlign={'left'}>
            Skills That Are Tagged
          </Heading>
          <CategorySlider />
        </View>
        <View style={styles.faqView}>
          <TrendingCourse />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CourseDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
  },
  videoPreview: {
    width: screenWidth,
    height: screenHeight / 4,
  },
  contentView: {
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginVertical: 8,
  },
  footerText: {
    color: Colors.black,
    fontSize: 13,
    fontFamily: Fonts.InterRegular,
  },
  categoryView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: 25,
    marginHorizontal: 10,
  },
  priceViewText: {
    alignItems: 'center',
    marginHorizontal: 40,
    fontSize: 14,
    color: Colors.darkGray,
  },
  faqView: {
    flex: 1,
    paddingHorizontal: 25,
    alignItems: 'center',
  },
});
