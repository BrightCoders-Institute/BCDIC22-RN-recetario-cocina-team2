import {
    View,
    Text,
    StyleSheet
} from "react-native";
import image from '../../assets/s.jpg'

const ListaHorizontal=()=>{
    return(
        <ScrollView>
        <View
          style={{
            height: 130,
            marginTop: 130,
            marginLeft: 20,
            borderWidth: 0.5,
            borderColor: '#dddddd'
          }}
        >
          <View style={{ flex: 2 }}>
            <Image
              source={'../../assets/s.jpg'}
              style={{
                flex: 1,
                width: null,
                height: null,
                resizeMode: 'cover'
              }}
            />
            <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
              <Text> Texto de primer receta </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    )
}

export default ListaHorizontal
