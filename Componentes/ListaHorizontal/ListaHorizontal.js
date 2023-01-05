/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { ScrollView, StyleSheet, View } from 'react-native'
import Item from '../Item/Item'
import { useSelector } from 'react-redux'
const recetas = require('../../recetas.json')

const ListaHorizontal = ({ navigation, render }) => {
  const recetasLiked = useSelector(state => state)
  // console.log('recetasliekdHOME]', recetasLiked)
  const values = Object.values(recetasLiked)
  // console.log('valuesHOME', values)
  const recetaRender = []

  values.map(value =>
    value.liked
      ? recetaRender.push(
        recetas.find(receta => receta.nombre === value.nombre)
      )
      : console.log('NOOO')
  )

  // console.log("RECETAs",recetasData)

  console.log('RECETARENER', recetaRender)

  return (
    <View style={styles.contenedor}>
      <ScrollView horizontal={true} style={styles.scroll}>
        {render === 'all'
          ? recetas.map(receta => {
            return (
                <Item
                  navigation={navigation}
                  key={receta.nombre}
                  nombre={receta.nombre}
                  foto={receta.foto}
                  ingredientes={receta.ingredientes}
                />
            )
          })
          : recetaRender.map(receta => {
            return (
                <Item
                  navigation={navigation}
                  key={receta.nombre}
                  nombre={receta.nombre}
                  foto={receta.foto}
                  ingredientes={receta.ingredientes}
                />
            )
          })}
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  scroll: {
    color: 'red'
  },
  contenedor: {
    height: 170,
    width: 350
    // backgroundColor:'white'
  }
})

export default ListaHorizontal
