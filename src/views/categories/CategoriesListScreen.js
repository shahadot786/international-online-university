import {StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import CategoryList from '../../components/list/CategoryList';
import Colors from '../../constants/Colors';
import GlobalStyle from '../../utils/GlobalStyle';

const CategoriesListScreen = () => {
  return (
    <SafeAreaView style={[styles.container, GlobalStyle.AndroidSafeArea]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CategoryList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoriesListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    backgroundColor: Colors.light,
  },
});
