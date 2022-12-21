import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  ScrollView,
  Image
} from 'react-native';
import BarraBusqueda from './Componentes/BarraBusqueda/BarraBusqueda.js'
import image from './assets/favicon.png'

//Cuando es una imagen local no tienes que usar el require

export default function App () {
  return (
    <SafeAreaView style={styles.container}>
      <View>
          <BarraBusqueda />
        </View>
      {/*<ScrollView scrollEventThrotle={16}>*/}
        
       {/*
        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
          <Text
            style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}
          >
            Lista de recetas de cocina
          </Text>
          <View style={{ height: 130, marginTop: 20 }}>
          </View>
          <Image 
          source={image}
          />
        </View>
      </ScrollView>
      */}
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
  imagen:{
    height: 40,
    width: 40
  }
})
