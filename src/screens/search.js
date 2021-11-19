import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/searchBar';
import resultHook from '../hooks/resultHook';
import ResultList from '../components/resultList';

const SearchScreen = ({navigation}) => {
  const [term, setTerm] = useState('');
  const [searchApi, data, error] = resultHook();
  
// console.log(data[0].price)

const filterResultsByPrice = (price) => {
  return data.filter(result => {
    return result.price === price
  })
}
  return (
  <View style={{flex: 1}}>
    <SearchBar 
      searchTerm={term} 
      onChangeSearch={(newSearch) => setTerm(newSearch)} 
      onSeachTerm={() => searchApi(term)}
    />
    {error ? <Text>{error}</Text> : null}
    <Text>{term}</Text>
    <ScrollView>
      <ResultList navigation={navigation} result={filterResultsByPrice('$')} title='Cost effective' />
      <ResultList navigation={navigation} result={filterResultsByPrice('$$')} title='Bit pricier' />
      <ResultList navigation={navigation} result={filterResultsByPrice('$$$')} title='Big spender' />
    </ScrollView>
  </View>
  )
};

const styles = StyleSheet.create({});

export default SearchScreen;