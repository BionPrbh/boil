import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Category extends Component {
  static navigationOptions = {
    title: 'Category',
  };
  // example of propping technique from page Home
  // <Button
  //   title="Go to Details"
  //   onPress={() => {
  //     /* 1. Navigate to the Details route with params */
  //     this.props.navigation.navigate('Details', {
  //       itemId: 86,
  //       otherParam: 'anything you want here',
  //     });
  //   }}
  // />

  // to get category title props from Home
  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     title: navigation.getParam('otherParam', 'A Nested Details Screen'),
  //   };
  // };
  render(){
    // connecting Home with Category
    // const { navigation } = this.props;
    // to get using navigation
    // const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View>
        <Text> aaaa ini di category </Text>
      </View>
    )
  }
}

export default Category