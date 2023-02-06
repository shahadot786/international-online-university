import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Searchbar} from 'react-native-paper';

const CustomSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search topics.."
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default CustomSearchBar;

const styles = StyleSheet.create({});
