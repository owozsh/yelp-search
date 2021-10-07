import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SearchResultCard = ({ name, imageSource }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{name}</Text>
      <Image
        style={styles.image}
        source={{
          uri: imageSource,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    margin: 20,
    marginBottom: 0,
    height: 350,
    borderRadius: 13,
    padding: 10,
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 10,
      width: 0,
    },
    shadowRadius: 10,
  },
  cardTitle: {
    fontSize: 24,
    marginTop: 7,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    flexShrink: 1,
    borderRadius: 10,
  },
});

export default SearchResultCard;
