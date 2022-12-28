import { Button, View, Image,StyleSheet,TouchableOpacity,Text} from "react-native";

const Item=({navigation})=>{
    return(
        <View style={styles.item}>
            <TouchableOpacity
            onPress={()=>navigation.navigate('Details')}>
            <Image style={{width: 160, height: 150, borderRadius: 15}} source ={{ uri: "https://foodandtravel.mx/wp-content/uploads/2021/05/Hamburguesas.jpg"}}/>
            <Text style={styles.text}>Hambugueja al vapor</Text> 
            </TouchableOpacity>
        </View>       
    )
}
const styles = StyleSheet.create({
    button:{
     color:'red'
    },
    item:{
        backgroundColor:"#1E1E1E",
        padding:10,
        borderRadius:10,
        marginLeft:2,
        marginRight:2,
    },
    text:{
        color:'white',
        fontSize:20,
        marginTop:10
    }
   })
export default Item

