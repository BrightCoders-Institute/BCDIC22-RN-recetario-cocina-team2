/* eslint-disable react/react-in-jsx-scope */
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import BarraBusqueda from '../Componentes/BarraBusqueda/BarraBusqueda'
import ListaHorizontal from '../Componentes/ListaHorizontal/ListaHorizontal'

export default function Home ({ nav }) {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <BarraBusqueda />
        <Text style={styles.text}>TRENDING</Text>
        <ListaHorizontal navigation={navigation} render='liked' />
        <Text style={styles.text}>RECENT</Text>
        <ListaHorizontal navigation={navigation} render='all' />
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
    color: '#C51D3E',
    fontSize: 30,
    margin: 10,
    fontWeight: 'bold'
  },
  imagen: {
    height: 40,
    width: 40
  },
  button: {
    padding: 10
  }
})
