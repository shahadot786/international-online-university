import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Searchbar} from 'react-native-paper';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const CustomSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      style={styles.searchBar}
      placeholder="Search over 200+ courses..."
      onChangeText={onChangeSearch}
      value={searchQuery}
      inputStyle={styles.searchText}
    />
  );
};

export default CustomSearchBar;

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: Colors.light,
    borderWidth: 1,
    borderColor: Colors.secondary,
    borderRadius: 8,
  },
  searchText: {
    fontSize: 13,
    color: Colors.darkGray,
    fontFamily: Fonts.InterRegular,
  },
});
