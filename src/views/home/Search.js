import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import CustomSearchBar from '../../components/textInput/CustomSearchBar';

const Search = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        {/* Search */}
        <View>
          <CustomSearchBar />
        </View>
      </View>
    </ScrollView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
  },
});
