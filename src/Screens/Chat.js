import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Chat extends Component {
  constructor(props){
    super(props)
    this.state = {
      chat:[
        { 
          description:"hi",
          role:"buyer" 
        },
        { 
          description:"do you have any 12L carrier?",
          role:"buyer" 
        },
        { 
          description:"i prefer the one with flute and comes with water proof feature",
          role:"buyer" 
        },
        { 
          description:"hi elisa! first of all thank you for asking us about your needs",
          role:"Seller" 
        },
        { 
          description:"we got:",
          role:"Seller" 
        },
        { 
          description:"Eiger Monja $200",
          role:"Seller" 
        },
        ,
        { 
          description:"Consina Turbulence $150",
          role:"seller" 
        },
        ,
        { 
          description:"and Deuter $400",
          role:"seller" 
        }    
      ]
    }
  }
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('name'),
    }
  };
  render(){
    return (
      <View>
        <Text> in di produk he he he he  </Text>
      </View>
    )
  }
}

export default Chat