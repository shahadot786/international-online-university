import {StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import CategoryList from '../../components/list/CategoryList';
import Colors from '../../constants/Colors';

const CategoriesListScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <CategoryList />
    </ScrollView>
  );
};

export default CategoriesListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    backgroundColor: Colors.light,
    paddingBottom: 65,
  },
});
