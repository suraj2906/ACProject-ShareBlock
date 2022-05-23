import { FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, TouchableOpacity, View, TextInput } from 'react-native';
import BottomMenu from '../../components/BottomMenu';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import SearchTile from '../../components/SearchTile';

export default function Search(props) {
  return (
    <View style={styles.container}>
        <LinearGradient colors={["transparent", "transparent"]} style={styles.heading}>
          <TouchableOpacity style={{padding: 7, borderRadius: 25, backgroundColor: "pink", borderWidth: 0.3, borderColor: "black"}}>
            <Ionicons name="search" size={25} color="black" />
          </TouchableOpacity>
            <TextInput style={styles.searchinput} placeholder="Search"/>
        </LinearGradient>
        <Text>-  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -</Text>
        <SearchTile />
        <SearchTile />
        <SearchTile />
        <SearchTile />
        <BottomMenu navigation={props.navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      width: "100%",
    backgroundColor: "#fff",
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  heading:{
    flexDirection: "row",
    alignSelf:"flex-start",
    paddingLeft: 30,
    alignItems: "center",
    paddingTop: 15,
    width: "100%",
    paddingBottom: 2
},
headingText:{
    fontFamily: "Mitr_200ExtraLight",
    marginLeft: 20,
    fontSize: 30,
    letterSpacing: 5
},
buttontext:{
      color: "white",
      fontSize: 20,
      marginRight: 20,
      fontFamily: 'Mitr_600SemiBold'
  },
searchinput: {
    backgroundColor: "#ebebeb",
    width: "75%",
    fontSize: 17,
    marginLeft: 10,
    paddingLeft: 10,
    borderRadius: 5,
    paddingTop: 5,
    paddingBottom: 5,
    borderWidth: 0.5, 
    borderColor: "black"
}
});
