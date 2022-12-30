import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import EvilIcons from '@expo/vector-icons/EvilIcons'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

export default function Details({route}) {
  const navigation = useNavigation()
  const ingredientesInfo=route.params.ingredientes
  const nombreIngrediente = Object.keys(ingredientesInfo)
  console.log("nomnre Ingredientes:",nombreIngrediente)

  return (
    <SafeAreaView style={styles.background}>
      <ImageBackground
        source={{
          uri: 'https://foodandtravel.mx/wp-content/uploads/2021/05/Hamburguesas.jpg'
        }}
        style={styles.image}
      >
        <View style={styles.imageContainer}>
          <TouchableOpacity>
            <Ionicons
              style={styles.iconCerrar}
              name='close-outline' //Nombre que sale en la pagina
              size={35}
              color='white'
              onPress={()=>navigation.navigate('Home')}
            />
          </TouchableOpacity>

          <Ionicons
            style={styles.iconCompartir}
            name='share-outline' //Nombre que sale en la pagina
            size={25}
            color='white'
          />
          <TouchableOpacity>
            <Ionicons
              style={styles.iconCorazon}
              name='heart-outline' //Nombre que sale en la pagina
              size={25}
              color='white'
            />
          </TouchableOpacity>
        </View>

        <View style={styles.contenedorTexto}>
          <Text style={styles.textCategory}>TRENDING</Text>
          <Text style={styles.text}>Hamburgueja al vapor</Text>
        </View>
      </ImageBackground>
      <View style={styles.cantidad}>
        <Text style={styles.smallText1}>Ingredients</Text>
        <Text style={styles.smallText2}>for 3 servings</Text>
      </View>

      <View style={styles.contenedor}>
        
          <View style={styles.itemImgrediente}>
            <Text style={styles.smallText}>{nombreIngrediente}</Text>
            <Text style={styles.smallTextCantidad}>
              Soy una libra
            </Text>
          </View>
        </View>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  contenedorTexto: {
    //backgroundColor: 'red',
  },
  cantidad: {
    //backgroundColor: 'red',
    alignSelf: 'flex-start',
    marginLeft: 15,
    marginTop: 10
  },
  smallTextCantidad: {
    //backgroundColor:"red",
    color: "white",
    margin: 3,
    marginLeft: 80,
    fontSize: 12
  },

  background: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginLeft: 20,
    fontWeight: 'bold'
  },
  smallText: {
    color: 'white',
    fontSize: 12,
    margin: 5
  },
  smallText1: {
    color: 'white',
    fontSize: 17,
    marginLeft: 5
  },
  smallText2: {
    color: 'white',
    fontSize: 15,
    marginLeft: 5
  },
  image: {
    width: 360,
    height: 300
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    //backgroundColor: 'rgba(40,40,40,0.7)',
    width: 400,
    height: 220
  },
  iconCorazon: {
    marginTop: 40,
    // backgroundColor: 'blue',
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 0.09,
    height: 30
    //marginLeft: 180
    //justifyContent: 'flex-end'
  },
  iconCerrar: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 0.7,
    marginLeft: 25,
    height: 30
    // backgroundColor: 'red'
  },
  iconCompartir: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 0.05,
    height: 30
    //marginLeft: 30,
    //backgroundColor: 'green'
  },
  ingredientes: {
    // backgroundColor: 'green',
    marginTop: 20
    // width: 150,
    // height: 200
  },
  cantidades: {
    backgroundColor: 'red'
    // width: 150,
    // height: 200
  },
  contenedor: {
    display: 'flex',
    flexDirection: 'column',
    width: 300
  },
  textCategory: {
    color: 'white',
    marginLeft: 20
  },
  itemImgrediente: {
    //backgroundColor:'blue',
    margin: 3,
    display: 'flex',
    flexDirection: 'row'
  }
})
