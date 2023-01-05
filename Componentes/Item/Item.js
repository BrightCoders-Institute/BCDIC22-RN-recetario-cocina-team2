/* eslint-disable */
import {
  Button,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native'
import { useSelector } from 'react-redux'

const Item = ({ navigation, nombre, foto, ingredientes }) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Details', {
            ingredientes: ingredientes,
            foto,
            nombre: nombre,

            eventName: 'setLikedReceta'
          })
        }
      >
        <Image style={styles.image} source={{ uri: foto }} />
        <Text style={styles.text}>{nombre}</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  button: {
    color: 'red'
  },
  item: {
    //backgroundColor:"red",
    padding: 10, //Ora si
    borderRadius: 10,
    marginLeft: 2,
    marginRight: 2
    // display:'flex',
    // flexDirection:'row',
    // alignItems:'center',
    // justifyContent:'center'
  },
  text: {
    color: 'white',
    fontSize: 15,
    marginTop: 10
  },
  image: {
    width: 130,
    height: 120,
    borderRadius: 12
  }
})
export default Item
