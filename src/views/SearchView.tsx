import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

import SearchBar from '../components/SearchBar';
import SearchResultCard from '../components/SearchResultCard';

import yelp from '../api/yelp';

const SearchView = () => {
  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async () => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchInput,
          location: 'Rio de Janeiro',
        },
      });
      setResults(response.data.businesses);
      setErrorMessage('');
    } catch (err) {
      setErrorMessage('Não encontramos este restaurante');
    }
  };

  const renderResults = ({ item }) => (
    <SearchResultCard name={item.name} imageSource={item.image_url} />
  );

  return (
    <View style={styles.container}>
      <SearchBar
        searchInput={searchInput}
        onSearchInputChange={setSearchInput}
        onSubmit={searchApi}
      />
      <FlatList
        style={styles.list}
        data={results}
        renderItem={renderResults}
        keyExtractor={(item) => item.id}
      />
      <Text>{errorMessage}</Text>
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    height: '100%',
    overflow: 'scroll',
  },
});

export default SearchView;
