import React, { Component } from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

class Inbox extends Component {
  constructor(props){
    super(props)
    this.state = {
      chatDummy:[
        {
          id:'1',
          name:"elisa",
          img:"http://www.mountainswithmegan.com/wp-content/uploads/2016/01/ebcselfie.jpg",
          lastSeen:"recently",
          lastMessage:"yuhu"
        },
        {
          id:'2',
          name:"john",
          img:"https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
          lastSeen:"6 h",
          lastMessage:"test"
        },
        {
          id:'3',
          name:"liam",
          img:"https://ak7.picdn.net/shutterstock/videos/6459167/thumb/10.jpg",
          lastSeen:"8 h",
          lastMessage:"WHERE IS MY UFCKING BAG"
        },
        {
          id:'4',
          name:"luna",
          img:"https://pbs.twimg.com/profile_images/1045490156076232704/IVX2A0wz_400x400.jpg",
          lastSeen:"2 d",
          lastMessage:"hi babe"
        },
        
      ]
    }
  }
  static navigationOptions = {
    title: 'Inbox',
  };

  render(){
    
    return (
      <View>
        {/* <Text style={styles.inboxHeaderTitle}> Inbox  </Text> */}
        
        <SafeAreaView>
          <FlatList
            data={this.state.chatDummy}
            renderItem={({ item }) => {
            return(
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Chat', { name:item.name })}>
                <View style={{flex:1, flexDirection:'row', padding:10}}>
                  <View>
                    <Image source={{uri: item.img}} style={{width:50, height:50, borderRadius:100}}/>
                  </View>
                  <View style={{width:'65%',paddingLeft:10, justifyContent:'center'}}>
                    <View>
                      <Text style={{fontWeight:'bold', fontSize:18}}>{item.name}</Text>
                      <Text>{item.lastMessage}</Text>
                    </View>
                  </View>
                  <View style={{width:'22%', justifyContent:'center'}}>
                    <Text style={{textAlign:'right'}}>{item.lastSeen}</Text>
                  </View>
                </View>
              </TouchableOpacity>
              )
            }}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inboxHeaderTitle:{
    fontSize:30
  }
})

export default Inbox