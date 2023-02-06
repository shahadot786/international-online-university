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

const SignIn = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Header />
        <View style={styles.header}>
          <Heading color={COLORS.black} size={18}>
            Sign In
          </Heading>
          <SubHeading color={COLORS.black} size={16}>
            Welcome Back Learner, let’s start
          </SubHeading>
        </View>
        {/* header end */}
        <View style={styles.inputHandler}>
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
          <GetStartedBtn>Sign In</GetStartedBtn>
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
            Don't have an account?
          </Heading>
          <View style={styles.navigationView}>
            <Pressable onPress={() => navigation.navigate('SignUp')}>
              {({pressed}) => (
                <Text style={[pressed ? styles.text3 : styles.text2]}>
                  SIGN UP
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
          <SubHeading color={COLORS.black} size={11}>
            SIGN UP WITH YOUR ORGANIZATION
          </SubHeading>
          <View style={styles.warning}>
            <SubHeading color={COLORS.gray} size={11}>
              I accept iou's Terms of Use and Privacy Notice. Having trouble
              logging in? Learner help center
            </SubHeading>
            <SubHeading color={COLORS.gray} size={11}>
              This site is protected by reCAPTCHA Enterprise and the Google.
              Privacy Policy and Terms of Service apply.
            </SubHeading>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.light,
    flex: 1,
  },
  header: {
    marginVertical: 40,
    flexDirection: 'column',
    gap: 4,
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
  text2: {
    color: COLORS.primary,
    fontSize: 16,
    fontFamily: Fonts.InterBold,
  },
  text3: {
    color: COLORS.black,
    fontSize: 16,
    fontFamily: Fonts.InterBold,
  },
  warning: {
    flexDirection: 'column',
    gap: 4,
    marginHorizontal: 60,
    marginBottom: 40,
  },
  navigationView: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
