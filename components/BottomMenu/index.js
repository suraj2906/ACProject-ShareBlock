import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {Ionicons, MaterialIcons, MaterialCommunityIcons, Entypo} from '@expo/vector-icons'

export default function BottomMenu(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{alignItems: "center"}} onPress={()=>props.navigation.navigate("feed")}>
        <MaterialIcons name="dynamic-feed" size={35} color="black" />
        
      </TouchableOpacity>
      <View style={{width: 0.4, height: "75%", backgroundColor: "black"}}/>
      <TouchableOpacity style={{alignItems: "center"}} onPress={()=>props.navigation.navigate("search")}>
        <MaterialCommunityIcons name="account-search" size={35} color="black" />
        
      </TouchableOpacity>
      <View style={{width: 0.4, height: "75%", backgroundColor: "black"}}/>
      <TouchableOpacity style={{alignItems: "center"}} onPress={()=>props.navigation.navigate("chatlist")}>
        <Ionicons name='chatbox-outline' size={35} color="black" />
        
      </TouchableOpacity>
      <View style={{width: 0.4, height: "75 %", backgroundColor: "black"}}/>
      <TouchableOpacity style={{alignItems: "center"}}>
        <Entypo name='emoji-happy' size={35} color="black" />
        
      </TouchableOpacity>
      <View style={{width: 0.4, height: "75 %", backgroundColor: "black"}}/>
      <TouchableOpacity style={{alignItems: "center"}} onPress={()=>props.navigation.navigate("profile")}>
        <MaterialCommunityIcons name="face-man-profile" size={35} color="black" />
        
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor: "black",
    position: 'absolute',
    bottom: 3,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: "98%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  text:{
    fontFamily: 'Mitr_300Light',
    fontSize: 12
  }
});
