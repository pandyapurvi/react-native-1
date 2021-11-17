import {createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import SearchScreen from './src/screens/search';

const navigator = createStackNavigator({
 Search: SearchScreen 
},
 {
   initailRouteName: 'Search',
   defaultNatigationOptions: {
     title: 'Business Search'
   }
});

export default createAppContainer(navigator);