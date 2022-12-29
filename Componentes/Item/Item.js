import { Button, View, Image,StyleSheet,TouchableOpacity,Text} from "react-native";

const Item=({navigation})=>{
    return(
        <View style={styles.item}>
            <TouchableOpacity
            onPress={()=>navigation.navigate('Details')}>
            <Image style={styles.image} source ={{ uri: "https://foodandtravel.mx/wp-content/uploads/2021/05/Hamburguesas.jpg"}}/>
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
        //backgroundColor:"red",
        padding:10,   //Ora si
        borderRadius:10,
        marginLeft:2,
        marginRight:2,
        // display:'flex',
        // flexDirection:'row',
        // alignItems:'center',
        // justifyContent:'center'         
    },
    text:{
        color:'white',
        fontSize:15,
        marginTop:10
    },
    image:{
        width: 130, 
        height: 120, 
        borderRadius: 12,
        
    }
   })
export default Item

