import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

class Profile extends Component {
  static navigationOptions = {
    title: 'Profile',
    tabBarIcon: () => {
      const homeIcon = <Icon name="user-circle" size={25} color="#900" />;
      return homeIcon
    },
  };
  render(){
    return (
      <View>
        <Text> aaaa ini profile acuu </Text>
      </View>
    )
  }
}

export default Profile