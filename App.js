import {createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import SearchScreen from './src/screens/search';
import ShowResultDetail from './src/screens/showResultDetail';

const navigator = createStackNavigator({
 Search: SearchScreen,
 ShowResult: ShowResultDetail
},
 {
   initailRouteName: 'Search',
   defaultNatigationOptions: {
     title: 'Business Search'
   }
});

export default createAppContainer(navigator);