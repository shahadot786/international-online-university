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

const CourseCard = () => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={[styles.container, {width: screenWidth.width - 60}]}>
        {/* image */}
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={require('../../../assets/card.jpg')}
          />
          <View style={styles.courseView}>
            <Icon name="layers-outline" size={24} color="#fff" />
            <Text style={styles.courseText}>7 Courses</Text>
          </View>
        </View>
        {/* text-1 */}
        <View style={styles.text1View}>
          <Icon name="ribbon-outline" size={34} color="#DE1D24" />
          <Text style={styles.text1}>Daffodil International University</Text>
        </View>
        {/* heading */}
        <View>
          <Text style={styles.heading}>
            The Business of Graphic Design: Protect & Perfect Your Passion
          </Text>
        </View>
        {/* text-2 */}
        <View>
          <Text style={styles.text2}>Skill Set: Gratitude, Happiness</Text>
        </View>
        {/* footer */}
        <View style={styles.footer}>
          <Icon name="star" size={20} color="#FCB900" />
          <Text style={styles.footerText}>4.8 (1.2k)</Text>
          <Icon name="people-outline" size={20} color="#313131" />
          <Text style={styles.footerText}>2.78k</Text>
          <Icon name="time-outline" size={20} color="#313131" />
          <Text style={styles.footerText}>58 hours</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CourseCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    elevation: 4,
    paddingBottom: 20,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  imageView: {
    height: 200,
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
    backgroundColor: '#DE1D24',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    flexDirection: 'row',
  },
  courseText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 13,
    marginLeft: 10,
    textAlign: 'center',
    marginTop: 3,
  },
  text1View: {
    flexDirection: 'row',
    paddingHorizontal: 14,
    paddingVertical: 10,
    alignItems: 'center',
  },
  text1: {
    color: '#001514',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  heading: {
    color: '#313131',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  text2: {
    color: '#313131',
    fontSize: 14,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  footer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
    gap: 8,
    marginVertical: 5,
  },
  footerText: {
    color: '#313131',
    fontSize: 14,
  },
});