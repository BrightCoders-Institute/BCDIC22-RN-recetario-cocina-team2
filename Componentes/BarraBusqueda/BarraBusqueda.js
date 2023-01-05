import * as React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'

const BarraBusqueda = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconSearchContainer}>
        <FontAwesome
          style={styles.icon}
          name='search' // Nombre que sale en la pagina
          size={13}
          color='white'
        />
      </View>

      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='What do you want to eat?'
          placeholderTextColor='white'
          maxLenght={20}
        />
      </View>
      <View style={styles.iconMicContainer}>
        <FontAwesome
          style={styles.icon}
          name='microphone'
          size={13}
          color='white'
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    flexDirection: 'row',
    margin: 20,
    marginTop: 50,
    alignItems: 'center',
    backgroundColor: '#474747',
    padding: 2,
    borderRadius: 15
  },
  iconSearchContainer: {
    flexGrow: 0.3,
    justifyContent: 'center',
    marginLeft: 10,
    borderRadius: 15
  },
  icon: {
    width: 20,
    margin: 'auto'
  },
  textInputContainer: {
    flexGrow: 2,
    backgroundColor: '#474747',
    borderRadius: 15,
    color: 'white'
  },
  textInput: {
    color: 'white'
  },
  iconMicContainer: {},
  text: {
    margin: 20
  }
})

export default BarraBusqueda
