import React from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ searchInput, onSearchInputChange, onSubmit }) => {
  return (
    <View style={styles.searchBarContainer}>
      <View style={styles.searchBar}>
        <Feather name="search" style={styles.searchIcon} />
        <TextInput
          style={styles.searchBarTextInput}
          placeholder={'Search'}
          autoCorrect={false}
          autoCapitalize={'none'}
          value={searchInput}
          onChangeText={onSearchInputChange}
          onEndEditing={onSubmit}
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
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBarTextInput: {
    width: '100%',
    padding: 10,
  },
  searchIcon: {
    fontSize: 20,
    padding: 10,
    paddingRight: 0,
  },
});

export default SearchBar;
