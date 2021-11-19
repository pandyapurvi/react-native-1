import React, {useState, useEffect} from 'react';
import yelp from '../api/yelp';

export default () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  const searchApi = async (searchTerm) => {
    console.log('Hey')
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose'
        }
      });
      setData(response.data.businesses)

    } catch(err){
      setError('Something went wrong');
    }
  }
  useEffect(() => {
    searchApi('pasta')
  }, [])
  return [searchApi, data, error]
};