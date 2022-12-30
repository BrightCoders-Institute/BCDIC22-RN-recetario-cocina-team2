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
import BarraBusqueda from '../Componentes/BarraBusqueda/BarraBusqueda'
import ListaHorizontal from '../Componentes/ListaHorizontal/ListaHorizontal'
//import image from './assets/favicon.png'



export default function Home ({nav}) {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <BarraBusqueda/>
        <Text style={styles.text}>TRENDING</Text>
        <ListaHorizontal navigation={navigation}/> 
        <Text style={styles.text}>LIKED</Text>
        <ListaHorizontal navigation={navigation}/> 
        
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
    color: '#FF4721',
    fontSize:30,
   margin:10,
    fontWeight:'bold'
  },
  imagen: {
    height: 40,
    width: 40
  },
  button:{
    padding:10
  }
})
