import React, { useState } from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <View style={styles.searchBarContainer}>
      <View style={styles.searchBar}>
        <Feather name="search" size={20} />
        <TextInput
          style={styles.SearchBarTextInput}
          placeholder={'Search'}
          autoCorrect={false}
          autoCapitalize={'none'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    padding: 13,
    paddingTop: 3,
    borderColor: '#000',
    backgroundColor: '#d32323',
  },
  searchBar: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  SearchBarTextInput: {
    width: '100%',
    marginLeft: 10,
  },
});

export default SearchBar;
