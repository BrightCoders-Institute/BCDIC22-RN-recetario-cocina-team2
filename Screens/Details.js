import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList
} from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import EvilIcons from '@expo/vector-icons/EvilIcons'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { event } from "../Event/index";

export default function Details ({ route }) {
  const nombre=route.params.nombre
  const eventName=route.params.eventName
  console.log("EVENTNMAME",typeof eventName)
  const navigation = useNavigation()
  let isLiked = route.params.isLiked
  console.log('isliked', isLiked)
  const ingredientesInfo = route.params.ingredientes
  //console.log('routeparams', route.params)
  const nombreIngrediente = Object.keys(ingredientesInfo)
  const cantidades = Object.values(ingredientesInfo)
  //console.log('nomnre Ingredientes:', nombreIngrediente)
  //console.log('nomnre cantidades:', cantidades)
  //console.log('nomnre :', route.params.nombre)

  return (
    <SafeAreaView style={styles.background}>
      <ImageBackground
        source={{
          uri: route.params.foto
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
              onPress={() => navigation.navigate('Home')}
            />
          </TouchableOpacity>

          <Ionicons
            style={styles.iconCompartir}
            name='share-outline' //Nombre que sale en la pagina
            size={25}
            color='white'
          />

          <TouchableOpacity
            onPress={() =>event.emit(eventName,nombre)}
          >
            {isLiked ? (
              <Ionicons
                style={styles.iconCorazon}
                name='heart' //Nombre que sale en la pagina
                size={25}
                color='red'
              />
            ) : (
              <Ionicons
                style={styles.iconCorazon}
                name='heart-outline' //Nombre que sale en la pagina
                size={25}
                color='white'
              />
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.contenedorTexto}>
          <Text style={styles.textCategory}>TRENDING</Text>
          <Text style={styles.text}>{route.params.nombre}</Text>
        </View>
      </ImageBackground>
      <View style={styles.cantidad}>
        <Text style={styles.smallText1}>Ingredients</Text>
        <Text style={styles.smallText2}>for 3 servings</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contenedor}>
          <View style={styles.itemImgrediente}>
            {nombreIngrediente.map(ingrediente => {
              return (
                <View style={styles.border}>
                  <Text style={styles.textCantidades}>{ingrediente}</Text>
                </View>
              )
            })}
          </View>
          <View style={styles.itemImgrediente}>
            {cantidades.map(cantidad => {
              return (
                <View style={styles.border}>
                  <Text style={styles.textCantidadesDerecha}>{cantidad}</Text>
                </View>
              )
            })}
          </View>
        </View>
      </ScrollView>

      {/* <FlatList
        data={ingredientesInfo}
        keyExtractor={(item, index) => index.toString()}
        
        renderItem={({ item }) => (
          <View>
            <Text style={styles.itemImgrediente}></Text>
          </View>
        )}
      >
       
      </FlatList> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  contenedorTexto: {
    //backgroundColor: 'red',
  },
  linea: {
    backgroundColor: 'red'
  },
  cantidad: {
    //backgroundColor: 'red',
    alignSelf: 'flex-start',
    marginLeft: 15,
    marginTop: 10
  },
  smallTextCantidad: {
    //backgroundColor:"red",
    color: 'white',
    margin: 3,
    marginLeft: 80,
    fontSize: 12
  },

  background: {
    flex: 1,
    backgroundColor: '#282828',
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
    //backgroundColor: 'blue',
    display: 'flex',
    flexDirection: 'row',

    height: 30
    //marginLeft: 180
    //justifyContent: 'flex-end'
  },
  iconCerrar: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'row',

    marginLeft: 25,
    height: 30
    //backgroundColor: 'red'
  },
  iconCompartir: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'row',

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
    //backgroundColor: 'green',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20
  },
  textCategory: {
    color: 'white',
    marginLeft: 20
  },
  itemImgrediente: {
    //backgroundColor: 'blue',
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    width: 150
    //justifyContent:"flex-start",
    //alignContent:"flex-start"
    //alignItems:"flex-start"
  },
  textCantidades: {
    color: 'white',
    fontSize: 13,
    margin: 8
  },
  textCantidadesDerecha: {
    color: 'white',
    fontSize: 13,
    margin: 8,
    textAlign: 'right'
  },
  border: {
    borderBottomColor: 'rgba(255,255,255,0.1)',
    borderBottomWidth: 1

    //backgroundColor: 'blue',
  }
})
