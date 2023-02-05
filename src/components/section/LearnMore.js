import {StyleSheet, Dimensions, View} from 'react-native';
import React from 'react';
import Heading from '../text/Heading';
import SubHeading from '../text/SubHeading';
import ExploreBtn from '../button/ExploreBtn';

const width = Dimensions.get('screen');
const LearnMore = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.headContent, {width: width.width / 1.2}]}>
        <View style={styles.heading}>
          <Heading color={'#FFFFFF'} size={24}>
            Iou for Business, team and university
          </Heading>
        </View>
        <View style={styles.subHeading}>
          <SubHeading color={'#FFFFFF'} size={18}>
            We’ve got the solution: world- class training and development
            programs, enveloped by top universities and companies. All on
            Coursers for Business.
          </SubHeading>
        </View>
      </View>
      <View style={[styles.headContent2, {width: width.width / 1.2}]}>
        <View style={styles.heading2}>
          <Heading color={'#001514'} size={24}>
            Made to Meet All Your Learning Needs
          </Heading>
        </View>
        <View style={styles.subHeading2}>
          <SubHeading color={'#001514'} size={18}>
            We’ve got the solution: world- class training and development
            programs, enveloped by top universities and companies. All on
            Coursers for Business.
          </SubHeading>
        </View>
        <View style={styles.button}>
          <ExploreBtn>Learn More</ExploreBtn>
        </View>
      </View>
    </View>
  );
};

export default LearnMore;

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headContent: {
    paddingVertical: 40,
    backgroundColor: '#D9001B',
    borderRadius: 20,
    marginBottom: 25,
  },
  headContent2: {
    paddingVertical: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#D5D5D5',
  },
  heading: {
    marginHorizontal: 45,
  },
  subHeading: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  heading2: {
    marginHorizontal: 45,
  },
  subHeading2: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  button:{
    alignItems:'center',
    marginTop:25
  }
});
