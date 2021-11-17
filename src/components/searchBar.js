import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({searchTerm, onChangeSearch, onSeachTerm}) => {
  return <View style={styles.background}>
    <Feather name='search' style={styles.iconStyle} />
    <TextInput
      autoCapitalize='none'
      autoCorrect={false} 
      placeholder='Serach' 
      style={styles.textstyle} 
      value={searchTerm}
      onChangeText={onChangeSearch}
      onEndEditing={onSeachTerm}
    />
    
    
  </View>
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F0EEFF',
    height: 50,
    borderRadius: 10,
    marginHorizontal:15,
    flexDirection: 'row',
    marginTop: 10
  },
  textstyle: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  }
});

export default SearchBar;