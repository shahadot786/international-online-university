import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Account = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable onPress={() => navigation.navigate('SignIn')}>
        <Text>Sign In</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('SignUp')}>
        <Text>Sign Up</Text>
      </Pressable>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({});
