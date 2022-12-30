
import {SafeAreaView, ScrollView,StyleSheet, Button,View} from "react-native";
import Item from '../Item/Item'
const recetas=require('../../recetas.json')
console.log(recetas)

const ListaHorizontal=({navigation})=>{
    return(
       <View style={styles.contenedor}>
             <ScrollView horizontal={true} style={styles.scroll}>
             {recetas.map(receta=>{
               return(
                  <Item 
                  navigation={navigation}
                  key={receta.nombre}
                  nombre={receta.nombre}
                  foto={receta.foto}
                  ingredientes={receta.ingredientes}
                  />
               )
             })}
                {/* <Item navigation={navigation}/>
                <Item navigation={navigation}/>
                <Item navigation={navigation}/>
                <Item navigation={navigation}/>
                <Item navigation={navigation}/> */}
             </ScrollView>
       </View>
    )
}
const styles = StyleSheet.create({
   scroll:{
    color:'red'
   },
   contenedor:{
    height:170,
    width:350,
    //backgroundColor:'white'
   }
  })

export default ListaHorizontal
