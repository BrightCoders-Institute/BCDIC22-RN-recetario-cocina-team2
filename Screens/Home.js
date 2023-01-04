/* eslint-disable */
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import BarraBusqueda from '../Componentes/BarraBusqueda/BarraBusqueda'
import ListaHorizontal from '../Componentes/ListaHorizontal/ListaHorizontal'
import { useState, useEffect } from 'react'
import { event } from '../Event/index'
import { useSelector } from 'react-redux'

// import image from './assets/favicon.png'
const data = require('../recetas.json')

export default function Home ({ nav }) {
  // const recetasLiked = useSelector(state => state)
  // recetasLiked.map(r => console.log('RRRR', r.liked))
  // console.log('recetasliekd]', recetasLiked)
  const [recetas, setRecetas] = useState([])

  useEffect(() => {
    console.log('effect')

    data.map(info =>
      setRecetas(recetas => {
        return recetas.concat({ nombre: info.nombre, liked: false })
      })
    )
  }, [])

  useEffect(() => {
    event.on('setLikedReceta', setLikedReceta)
    return () => {
      event.off('setLikedReceta', setLikedReceta)
    }
  }, [setLikedReceta])

  // recetas.map(receta=>console.log("house",receta))

  const liked = nombre => {
    const recetaObject = recetas.find(receta => receta.nombre === nombre)

    // console.log("LIKED",nombre)
    const recetaLiked = recetaObject?.liked
    // console.log('houseobjects', houseObject?.liked)
    // console.log("XXX",houseObject.liked)
    //console.log('LIKED', recetaLiked)
    return recetaLiked
  }

  const setLikedReceta = nombre => {
    console.log(typeof nombre)
    console.log('nombreCLICEKADO:____-', nombre)
    const equalReceta = recetas.find(receta => receta.nombre === nombre)

    console.log('equalReceta:____-', equalReceta)

    const nuevaRecetaLiked = {
      nombre: equalReceta.nombre,
      liked: true
    }
    console.log('nuevaRecetaLiked:____-', nuevaRecetaLiked)

    const nuevaRecetaUnliked = {
      nombre: equalReceta.nombre,
      liked: false
    }
    let newRecetas = []
    equalReceta.liked
      ? (newRecetas = recetas.map(receta =>
          receta.name === equalReceta.nombre
            ? (receta = { ...receta, liked: false })
            : receta
        ))
      : (newRecetas = recetas.map(receta =>
          receta.nombre === equalReceta.nombre
            ? (receta = { ...receta, liked: true })
            : receta
        ))

    console.log('newRecetas:____-', newRecetas)
    recetas.map(r => console.log('RRRR', r))
    setRecetas(newRecetas)
    // console.log("recetas:____-",recetas)
  }

  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <BarraBusqueda />
        <Text style={styles.text}>TRENDING</Text>
        <ListaHorizontal 
        navigation={navigation}
          data={data}
          liked={liked}
          recetasData={recetas}
          setLikedReceta={setLikedReceta}
          render='liked'
        />  
        <Text style={styles.text}>RECENT</Text>
        <ListaHorizontal
          navigation={navigation}
          data={data}
          liked={liked}
          recetasData={recetas}
          setLikedReceta={setLikedReceta}
          render='all'
        />
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
