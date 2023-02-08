import {StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import GlobalStyle from '../../utils/GlobalStyle';

const CourseDetails = ({route, navigation}) => {
  const courseData = route.params.courseDetails;
  return (
    <SafeAreaView style={[styles.container, GlobalStyle.AndroidSafeArea]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headingView}>
          <Text>{courseData.heading}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CourseDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
    paddingLeft: 20,
  },
  headingView: {
    marginTop: 20,
    gap: 10,
  },
});
