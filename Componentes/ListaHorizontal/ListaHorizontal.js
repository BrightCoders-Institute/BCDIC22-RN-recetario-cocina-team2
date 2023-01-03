import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Button,
  View
} from 'react-native'
import Item from '../Item/Item'
const recetas = require('../../recetas.json')

const ListaHorizontal = ({
  navigation,
  data,
  liked,
  setLikedReceta,
  recetasData
}) => {
  return (
    <View style={styles.contenedor}>
      <ScrollView horizontal={true} style={styles.scroll}>
        {recetas.map(receta => {
          return (
            <Item
              navigation={navigation}
              key={receta.nombre}
              nombre={receta.nombre}
              foto={receta.foto}
              ingredientes={receta.ingredientes}
              recetaObject={liked(receta.nombre)}
              recetasData={recetasData}
              setLikedReceta={setLikedReceta}
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
    //backgroundColor:'white'
  }
})

export default ListaHorizontal
