import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Home from './src/Screens/Home'
import Inbox from './src/Screens/Inbox'
import Chat from './src/Screens/Chat'
import NewProduct from './src/Screens/NewProduct'
import Product from './src/Screens/Product'
import Profile from './src/Screens/Profile'

import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { categories } from './src/_reducer/categories';

// const AppNavigator = createStackNavigator(
//   {
//     HomeScreen: Home,
//     CategoryScreen: Category,
//     ProductDetailsScreen: ProductDetails,
//     ProfileScreen: Profile
//   },  
//   {
//     initialRouteName: 'HomeScreen', 
//   }
// )

const InboxStack = createStackNavigator({
  Inbox: Inbox,
  Chat: Chat,
});

const ProductStack = createStackNavigator({
  Product: Product,
});

const TabNavigator = createBottomTabNavigator(
  {
  // {
  //   HomeScreen: Home,
  //   CategoryScreen: Category,
  //   ProductDetailsScreen: ProductDetails,
  //   ProfileScreen: Profile
  // }
    Home: { screen: Home },
    Inbox: { screen: InboxStack },
    NewProduct: { screen: NewProduct },
    Product: { screen: ProductStack },
    Profile: { screen: Profile }
  },
  {
    tabBarOptions: {
      activeBackgroundColor:'tomato',
      activeTintColor: 'white',
      inactiveTintColor: 'gray',
      labelStyle: {
        fontSize: 14,
        fontWeight:'bold'
      },
    }
  }
)
  
  
export default createAppContainer(TabNavigator)
