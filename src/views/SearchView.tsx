import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchView = () => {
  return (
    <View>
      <SearchBar />
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchView;
