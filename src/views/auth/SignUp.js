import {View, Text, StyleSheet, ScrollView, Pressable} from 'react-native';
import React from 'react';
import Header from '../../components/util/Header';
import Heading from '../../components/text/Heading';
import SubHeading from '../../components/text/SubHeading';
import COLORS from '../../constants/Colors';
import SingleInput from '../../components/textInput/SingleInput';
import Fonts from '../../constants/Fonts';
import GetStartedBtn from '../../components/button/GetStartedBtn';
import IconButton from '../../components/button/IconButton';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Header />
        <View style={styles.header}>
          <Heading color={COLORS.black} size={18} textAlign={'center'}>
            Sign Up
          </Heading>
          <SubHeading textAlign={'center'} color={COLORS.black} size={16}>
            Learn on your own time
          </SubHeading>
          <SubHeading textAlign={'center'} color={COLORS.black} size={16}>
            from top universities and instructors.
          </SubHeading>
        </View>
        {/* header end */}
        <View style={styles.inputHandler}>
          {/* name */}
          <View>
            <Text style={styles.text}>Full Name</Text>
            <SingleInput
              borderColor={COLORS.secondary}
              backgroundColor={COLORS.white}
              placeholder="Your Full Name"
            />
          </View>
          {/* email */}
          <View>
            <Text style={styles.text}>Email</Text>
            <SingleInput
              borderColor={COLORS.secondary}
              backgroundColor={COLORS.white}
              placeholder="Your Email Address"
            />
          </View>
          {/* password */}
          <View>
            <Text style={styles.text}>Password</Text>
            <SingleInput
              borderColor={COLORS.secondary}
              backgroundColor={COLORS.white}
              placeholder="Your Password"
              secureTextEntry={true}
            />
            <Text
              style={{
                fontFamily: Fonts.HelveticaRegular,
                fontSize: 10,
                color: COLORS.gray,
                marginTop: 1,
              }}>
              BETWEEN 8 AND 72 CHARACTERS
            </Text>
          </View>
          <GetStartedBtn>CONTINUE</GetStartedBtn>
          <Text>_______________________ or _______________________</Text>
          <IconButton
            title={'Continue With Facebook'}
            iconName={'logo-facebook'}
            backgroundColor={COLORS.blue}
            textColor={COLORS.white}
          />
          <IconButton
            title={'Continue With Google'}
            iconName={'logo-google'}
            backgroundColor={COLORS.primary}
            textColor={COLORS.white}
          />
          <IconButton
            title={'Continue With Apple'}
            iconName={'logo-apple'}
            backgroundColor={COLORS.black}
            textColor={COLORS.white}
          />
          <Heading color={COLORS.black} size={14}>
            ALREADY ON IOU?
          </Heading>
          <View style={styles.navigationView}>
            <Pressable onPress={() => navigation.navigate('SignIn')}>
              {({pressed}) => (
                <Text style={[pressed ? styles.text3 : styles.text2]}>
                  SIGN IN
                </Text>
              )}
            </Pressable>
            <Text>OR</Text>
            <Pressable onPress={() => navigation.navigate('BottomTab')}>
              {({pressed}) => (
                <Text style={[pressed ? styles.text3 : styles.text2]}>
                  BROWSE
                </Text>
              )}
            </Pressable>
          </View>
          <SubHeading textAlign={'center'} color={COLORS.black} size={11}>
            SIGN UP WITH YOUR ORGANIZATION
          </SubHeading>
          <View style={styles.warning}>
            <SubHeading textAlign={'center'} color={COLORS.gray} size={11}>
              I accept iou's Terms of Use and Privacy Notice. Having trouble
              logging in? Learner help center
            </SubHeading>
            <SubHeading textAlign={'center'} color={COLORS.gray} size={11}>
              This site is protected by reCAPTCHA Enterprise and the Google.
              Privacy Policy and Terms of Service apply.
            </SubHeading>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.light,
    flex: 1,
  },
  header: {
    marginVertical: 40,
    flexDirection: 'column',
    gap: -4,
  },
  inputHandler: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  text: {
    color: COLORS.black,
    fontSize: 16,
    fontFamily: Fonts.InterRegular,
    marginBottom: 8,
  },
  warning: {
    flexDirection: 'column',
    gap: 4,
    marginHorizontal: 60,
    marginBottom: 40,
  },
  text2: {
    color: COLORS.primary,
    fontSize: 14,
    fontFamily: Fonts.InterBold,
  },
  text3: {
    color: COLORS.black,
    fontSize: 14,
    fontFamily: Fonts.InterBold,
  },
  navigationView: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
