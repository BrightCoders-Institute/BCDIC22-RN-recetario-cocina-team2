import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    ImageBackground,
    SafeAreaView,
    ScrollView
  } from 'react-native'
  import React from 'react'
  
  export default function Details () {
    return(
      <SafeAreaView style={styles.background}>
       
          
           <Image style={styles.image} source ={{ uri: "https://foodandtravel.mx/wp-content/uploads/2021/05/Hamburguesas.jpg"}}/>
           <Text style={styles.text}>Hamburgueja al vapor</Text>
           <View style={styles.ingredientes}>
           <Text style={styles.smallText}>Soy un perro ingrediente</Text>
           <Text style={styles.smallText}>Soy un ingrediente</Text>
           <Text style={styles.smallText}>Soy un ingrediente</Text>
           </View>
           
      
      </SafeAreaView>
    )
   
  }
  
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: '#1E1E1E',
      alignItems: 'center'
    },
    text:{
      color:'white',
      fontSize:30,
      margin:20,
      
    },
    smallText:{
      color:'grey',
      fontSize:20,
      margin:20,
    },
    image:{
      width:500,
      height:500,
      borderRadius:10
    },
    ingredientes:{

    }
  })
  