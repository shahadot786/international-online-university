import {StyleSheet, View} from 'react-native';
import React from 'react';
import ListCard from '../card/ListCard';

const IMAGE1 = require('../../../assets/lecture.png');
const IMAGE2 = require('../../../assets/mortarboard.png');
const IMAGE3 = require('../../../assets/online-course.png');

const CourseList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.itemView}>
        <ListCard
          image={IMAGE3}
          heading={'692'}
          subHeading={'Online Course'}
          border={2}
        />
        <ListCard
          image={IMAGE2}
          heading={'20'}
          subHeading={'University Affiliation'}
          border={2}
        />
        <ListCard
          image={IMAGE1}
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
    backgroundColor: '#E31E25',
    width: '100%',
    paddingVertical: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imageView: {
    padding: 10,
    borderRadius: 6,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    marginTop: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
  contentView: {
    width: 250,
    borderBottomWidth: 2,
    borderColor: '#4D1E1F48',
    flexDirection: 'row',
  },
  heading: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: 'bold',
    marginLeft: 25,
    marginTop: 8,
  },
  subHeading: {
    fontSize: 14,
    color: '#FFFFFF',
    marginLeft: 25,
  },
});
