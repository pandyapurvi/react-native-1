import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/searchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  const searchApi = async () => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose'
        }
      });
      console.log(data.length)
      setData(response.data.businesses)

    } catch(err){
      setError('Something went wrong');
    }
  }
  // console.log(searchTerm)
  return (
  <View>
    <SearchBar 
      searchTerm={searchTerm} 
      onChangeSearch={(newSearch) => setSearchTerm(newSearch)} 
      onSeachTerm={searchApi}
    />
    {error ? <Text>{error}</Text> : null}
    <Text>{searchTerm}</Text>
    <Text>We have found {data.length} results</Text>
  </View>
  )
};

const styles = StyleSheet.create({});

export default SearchScreen;