import * as React from 'react'
import { View, TextInput, StyleSheet, Image } from 'react-native'
//import image from '../../assets/mic.png'

const BarraBusqueda = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        {/* <Image style={styles.imagen} source={image} /> */}
        <View style={styles.vwSearch}></View>
        <TextInput
          placeholder='What do you want to eat?'
          style={styles.textInput}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    alignItems: 'center',
    borderRadius: 30,
  },
  searchContainer: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    borderRadius: 30,
    backgroundColor: '#474747'
  },
  textInput: {
    flex: 1,
    justiFyContent: 'flex-end',
    width: '80%',
    borderRadius: 30,
    //backgroundColor: 'red'
  },
  vwSearch: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  imagen: {
    height: 40,
    width: 40
  },
  text: {
    margin: 20
  }
})

export default BarraBusqueda
