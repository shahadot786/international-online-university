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
import Fonts from '../../constants/Fonts';
import Colors from '../../constants/Colors';
import HighlightBtn from '../button/HighlightBtn';

const CourseCard = ({onPress, data}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={[styles.container, {width: screenWidth.width / 1.6}]}>
        {/* image */}
        <View style={styles.imageView}>
          <Image style={styles.image} source={data.image} />
          {data.availableCourse && (
            <View style={styles.availableCourse}>
              <Icon name="layers-outline" size={20} color="white" />
              <Text style={styles.courseText}>{data.availableCourse}</Text>
            </View>
          )}
        </View>
        <View style={styles.contentView}>
          {/* text-1 */}
          <View style={styles.text1View}>
            <Icon name="ribbon-outline" size={20} color={Colors.primary} />
            <Text style={styles.text1}>
              {data.instituteName?.length > 34
                ? `${data.instituteName.slice(0, 34)}..`
                : data.instituteName}
            </Text>
          </View>
          {/* heading */}
          <Text style={styles.heading}>
            {data.heading?.length > 80
              ? `${data.heading.slice(0, 80)}..`
              : data.heading}
          </Text>
          {/* text-2 */}
          <Text style={styles.text2}>
            {data.subHeading?.length > 34
              ? `${data.subHeading.slice(0, 34)}..`
              : data.subHeading}
          </Text>
          {/* footer */}
          <View style={styles.footer}>
            <Icon name="star" size={16} color={Colors.yellow} />
            <Text style={styles.footerText}>{data.rating}</Text>
            <Icon name="people-outline" size={16} color={Colors.black} />
            <Text style={styles.footerText}>{data.student}</Text>
            <Icon name="time-outline" size={16} color={Colors.black} />
            <Text style={styles.footerText}>{data.time}</Text>
          </View>
          {/* price */}
          <Text style={styles.price}>{data.price}</Text>
        {data.tag && <HighlightBtn title={data.tag} />}
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
    paddingBottom:20
  },
  contentView: {
    paddingHorizontal: 8,
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
  availableCourse: {
    position: 'absolute',
    top: 10,
    right: 15,
    backgroundColor: Colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    flexDirection: 'row',
  },
  courseText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
    marginLeft: 10,
    textAlign: 'center',
    marginTop: 3,
    fontFamily: Fonts.InterBold,
  },
  text1View: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
  },
  text1: {
    color: Colors.black,
    fontSize: 11,
    marginLeft: 5,
    fontFamily: Fonts.InterBold,
  },
  heading: {
    color: Colors.black,
    fontSize: 13,
    fontFamily: Fonts.InterBold,
  },
  text2: {
    color: Colors.black,
    fontSize: 11,
    marginVertical: 6,
    fontFamily: Fonts.InterRegular,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    marginVertical: 5,
  },
  footerText: {
    color: Colors.black,
    fontSize: 11,
    fontFamily: Fonts.InterRegular,
  },
  price: {
    fontSize: 18,
    fontFamily: Fonts.InterBold,
    color: Colors.black,
  },
});
