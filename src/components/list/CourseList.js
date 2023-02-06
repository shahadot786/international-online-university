import {StyleSheet, View} from 'react-native';
import React from 'react';
import ListCard from '../card/ListCard';
import COLORS from '../../constants/Colors';
import IMAGES from '../../constants/Images';

const CourseList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.itemView}>
        <ListCard
          image={IMAGES.onlineCourse}
          heading={'692'}
          subHeading={'Online Course'}
          border={2}
        />
        <ListCard
          image={IMAGES.mortarboard}
          heading={'20'}
          subHeading={'University Affiliation'}
          border={2}
        />
        <ListCard
          image={IMAGES.lecture}
          heading={'360'}
          subHeading={'Professional Mentors'}
          border={0}
        />
      </View>
    </View>
  );
};

export default CourseList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 40,
  },
  itemView: {
    backgroundColor: COLORS.primary,
    width: '100%',
    paddingVertical: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imageView: {
    padding: 10,
    borderRadius: 6,
    marginBottom: 10,
    backgroundColor: COLORS.white,
    marginTop: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
  contentView: {
    width: 250,
    borderBottomWidth: 2,
    borderColor: COLORS.black,
    flexDirection: 'row',
  },
  heading: {
    color: COLORS.white,
    fontSize: 26,
    fontWeight: 'bold',
    marginLeft: 25,
    marginTop: 8,
  },
  subHeading: {
    fontSize: 14,
    color: COLORS.white,
    marginLeft: 25,
  },
});
