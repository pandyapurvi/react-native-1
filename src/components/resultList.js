import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ResultDetail from './resultDetails';

const ResultList = ({title, result, navigation}) => {
  console.log('result', result)
  return <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <FlatList 
      horizontal
      showsHorizontalScrollIndicator={false}
      data={result}
      keyExtractor={(res) => res.id}
      renderItem={({item}) => {
        return (
          <TouchableOpacity onPress={() => navigation.navigate('ShowResult')}>
            <ResultDetail result={item}/>
          </TouchableOpacity>
        )
      }}
    />
  </View>
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15
  },
  container: {
    marginLeft: 15
  }
});

export default ResultList;