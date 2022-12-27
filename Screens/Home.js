import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  ScrollView,
  Image
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import BarraBusqueda from './Componentes/BarraBusqueda/BarraBusqueda.js'
import image from './assets/favicon.png'

//Cuando es una imagen local no tienes que usar el require

export default function Home () {

    const navigation=useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <BarraBusqueda />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    alignItems: 'center'
  },
  text: {
    color: '#fff'
  },
  imagen: {
    height: 40,
    width: 40
  }
})
