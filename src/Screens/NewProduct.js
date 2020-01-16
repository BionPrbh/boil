import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

class NewProduct extends Component {
  static navigationOptions = {
    title: '',
  };
  render(){
    return (
      <View>
        <Text style={styles.newProductHeaderTitle}> Inbox  </Text>
        <Button title="+" style={styles.newProductButton}></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  newProductHeaderTitle:{
    fontSize:30
  },
  newProductButton:{
    fontSize:20
  }
})

export default NewProduct