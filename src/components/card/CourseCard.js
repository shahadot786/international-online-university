import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
const screenWidth = Dimensions.get('screen');
const screenHeight = Dimensions.get('screen');
import COLORS from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const CourseCard = ({onPress, data}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={[styles.container, {width: screenWidth.width / 1.7}]}>
        {/* image */}
        <View style={styles.imageView}>
          <Image style={styles.image} source={data.image} />
          <View style={styles.courseView}>
            <Icon name="layers-outline" size={24} color="white" />
            <Text style={styles.courseText}>{data.availableCourse}</Text>
          </View>
        </View>
        {/* text-1 */}
        <View style={styles.text1View}>
          <Icon name="ribbon-outline" size={24} color={COLORS.primary} />
          <Text style={styles.text1}>
            {data.instituteName?.length > 34
              ? `${data.instituteName.slice(0, 34)}..`
              : data.instituteName}
          </Text>
        </View>
        {/* heading */}
        <View>
          <Text style={styles.heading}>
            {data.heading?.length > 80
              ? `${data.heading.slice(0, 80)}..`
              : data.heading}
          </Text>
        </View>
        {/* text-2 */}
        <View>
          <Text style={styles.text2}>
            {data.subHeading?.length > 34
              ? `${data.subHeading.slice(0, 34)}..`
              : data.subHeading}
          </Text>
        </View>
        {/* footer */}
        <View style={styles.footer}>
          <Icon name="star" size={16} color={COLORS.yellow} />
          <Text style={styles.footerText}>{data.rating}</Text>
          <Icon name="people-outline" size={16} color={COLORS.black} />
          <Text style={styles.footerText}>{data.student}</Text>
          <Icon name="time-outline" size={16} color={COLORS.black} />
          <Text style={styles.footerText}>{data.time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CourseCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 6,
    elevation: 4,
    paddingBottom: 10,
    marginRight: 20,
    marginVertical: 10,
    height: screenHeight.height / 2.6,
  },
  imageView: {
    height: 140,
    width: '100%',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  courseView: {
    position: 'absolute',
    top: 10,
    right: 15,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    flexDirection: 'row',
  },
  courseText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
    marginLeft: 10,
    textAlign: 'center',
    marginTop: 3,
    fontFamily: Fonts.InterBold,
  },
  text1View: {
    flexDirection: 'row',
    paddingHorizontal: 14,
    paddingVertical: 10,
    alignItems: 'center',
  },
  text1: {
    color: COLORS.black,
    fontSize: 12,
    marginLeft: 5,
    fontFamily: Fonts.InterBold,
  },
  heading: {
    color: COLORS.black,
    fontSize: 15,
    fontFamily: Fonts.InterBold,
    marginHorizontal: 20,
  },
  text2: {
    color: COLORS.black,
    fontSize: 14,
    marginHorizontal: 20,
    marginVertical: 10,
    fontFamily: Fonts.InterRegular,
  },
  footer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
    gap: 3,
    marginVertical: 5,
  },
  footerText: {
    color: COLORS.black,
    fontSize: 12,
    fontFamily: Fonts.InterRegular,
  },
});
