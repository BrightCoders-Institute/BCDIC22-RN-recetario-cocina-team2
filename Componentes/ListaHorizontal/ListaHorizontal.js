
import {SafeAreaView, ScrollView,StyleSheet, Button,View} from "react-native";
import Item from '../Item/Item'

const ListaHorizontal=({navigation})=>{
    return(
       <View style={styles.contenedor}>
             <ScrollView horizontal={true} style={styles.scroll}>
                <Item navigation={navigation}/>
                <Item navigation={navigation}/>
                <Item navigation={navigation}/>
                <Item navigation={navigation}/>
                <Item navigation={navigation}/>
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
