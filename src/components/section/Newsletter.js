import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Heading from '../text/Heading';
import SubHeading from '../text/SubHeading';
import SingleInput from '../textInput/SingleInput';
import GetStartedBtn from '../button/GetStartedBtn';

const Newsletter = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Heading color={'#F2F4F3'} size={24}>
          Try some of our courses.
        </Heading>
        <View style={styles.subHeading}>
          <SubHeading color={'#F2F4F3'} size={14}>
            Enter your email and we’ll send you some samples of our favorite
            classes.
          </SubHeading>
        </View>
      </View>
      <View style={styles.input}>
        <SingleInput
          backgroundColor={'#4D4C4C96'}
          borderColor={'#D4D4D4'}
          color={'#fff'}
          textAlign={'center'}
        />
        <GetStartedBtn>Submit</GetStartedBtn>
        <SubHeading color={'#fff'} size={13}>
          By submitting I am agree to receive email updates
        </SubHeading>
      </View>
    </View>
  );
};

export default Newsletter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginTop: 40,
  },
  input: {
    marginTop: 15,
  },
  subHeading: {
    marginHorizontal: 60,
  },
});
