import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Heading from '../text/Heading';
import SubHeading from '../text/SubHeading';
import SingleInput from '../textInput/SingleInput';
import GetStartedBtn from '../button/GetStartedBtn';
import COLORS from '../../constants/Colors';

const Newsletter = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Heading color={COLORS.light} size={24}>
          Try some of our courses.
        </Heading>
        <View style={styles.subHeading}>
          <SubHeading color={COLORS.light} size={14}>
            Enter your email and we’ll send you some samples of our favorite
            classes.
          </SubHeading>
        </View>
      </View>
      <View style={styles.input}>
        <SingleInput
          placeholder={'Your Email Address'}
          backgroundColor={COLORS.darkGray}
          borderColor={COLORS.secondary}
          color={COLORS.white}
          textAlign={'center'}
        />
        <GetStartedBtn>Submit</GetStartedBtn>
        <SubHeading color={COLORS.white} size={13}>
          By submitting I am agree to receive email updates
        </SubHeading>
      </View>
    </View>
  );
};

export default Newsletter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
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
