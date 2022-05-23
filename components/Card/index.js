import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View,Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function Card(props){
    return (
        <View style={styles.container}>
            <View style={{width: "95%", flexDirection: "row", alignSelf: 'flex-start', alignItems: "center", justifyContent: "space-between"}}>
                <View style={{flexDirection: "row",marginLeft: "10%", alignItems: "center"}}>

                <Image source={require("../../assets/download5.jpg")} style={{width: 40, height: 40, borderRadius: 25, marginRight: 10}} />
                <Text>Shivam Akhouri</Text>
                </View>
                <TouchableOpacity>
                    <Text style={{color:"pink"}}>FOLLOW</Text>
                </TouchableOpacity>
            </View>
            <Image source={require("../../assets/feeds.jpg")} style={{ marginTop: 10, width: "90%", height: "70%", borderRadius: 10}} /> 
            <View style={{flexDirection: "row", marginTop: 5,  marginRight: "5%", width: "35%", justifyContent: "space-between", alignSelf: 'flex-end', alignItems: "center"}}>
                <TouchableOpacity>
                    <Ionicons name="md-heart-outline" size={35} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="share-social-outline" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="chatbubble-outline" size={30} color="black" />
                </TouchableOpacity>
            </View>
            <Text style={{alignSelf: "flex-end", marginRight: "8%", fontWeight: "bold"}}>169 Likes</Text>
            <Text style={{alignSelf: "flex-end", marginRight: "8%"}}>Suraj Shah tagged you in the post</Text>

            <View style={{ marginTop: 10, width: "95%", height: 0.5, backgroundColor: "black", marginBottom : 5}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height: 550,
        width: "95%",
        alignSelf: "center",
        alignItems: "center",
    }
})