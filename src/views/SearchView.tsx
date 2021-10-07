import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchView = () => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <View>
      <SearchBar
        searchInput={searchInput}
        onSearchInputChange={(newSearchInput: string) =>
          setSearchInput(newSearchInput)
        }
      />
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchView;
