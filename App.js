import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  ScrollView,
  Image
} from 'react-native'
import BarraBusqueda from './Componentes/BarraBusqueda/BarraBusqueda.js'
import image from './assets/favicon.png'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import MainStack from './Navigation/MainStack'


export default function App () {
  return (
  
    <MainStack/>
  )
}
