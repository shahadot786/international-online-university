import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import CustomSearchBar from '../../components/textInput/CustomSearchBar';
import Heading from '../../components/text/Heading';
import TagList from '../../components/list/TagList';

const Search = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        {/* Search */}
        <View>
          <CustomSearchBar />
        </View>
        {/* tags */}
        <View style={styles.marginTop}>
          <Heading color={Colors.black} size={26} textAlign="left">
            Top Searches
          </Heading>
        </View>
        <TagList />
      </View>
    </ScrollView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
    paddingHorizontal: 15,
    paddingTop: 5,
  },
  marginTop: {
    marginTop: 20,
  },
});
