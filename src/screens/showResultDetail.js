import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ShowResultDetail = ({navigation}) => {
  const [result, setResult] = useState(null);

  const id = navigation.getParam('id');

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data)
  }
  useEffect(() => {
    getResult(id)
  }, []);

 
 
  if(!result){
    return null
  }

  return <View>
    <Text>Show Details</Text>
    <FlatList 
      data={result.photos}
      keyExtractor={(res) =>res.id}
      renderItem={({item}) => {
        return <Image source={{uri: item}} style={{height: 200, width: 300}}/>
      }}
    />
  </View>
};

const styles = StyleSheet.create({

});

export default ShowResultDetail;