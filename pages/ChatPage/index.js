import { Entypo, Ionicons } from '@expo/vector-icons'
import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import {Feather} from '@expo/vector-icons';

const ChatPage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Image source={require("../../assets/images.png")} style={{width: 50, height: 50, borderRadius: 25}}/>
                    <Text style={styles.headingText}>Shivam Akhouri</Text>
                </View>
                <TouchableOpacity>
                    <Entypo name="dots-three-vertical" size={25} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.chats}>

            </View>
            <Text>-   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -    -   -</Text>
            <View style={styles.sendMessage}>
                <TextInput placeholder="Enter your message here!" style={styles.input} />
                <TouchableOpacity style={{ alignItems: "center", borderWidth:0.4, borderColor: "black", padding: 8, backgroundColor: "#d6fcd2", borderRadius: 20 }}>
                    <Feather name="send" size={25} color="#5d5d5d" />
                </TouchableOpacity>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        minHeight: "100%",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    heading: {
        flexDirection: "row",
        alignSelf: "flex-start",
        paddingLeft: 30,
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 15,
        paddingRight: "5%",
        width: "100%",
        backgroundColor:"#dedede",
        paddingBottom: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    headingText: {
        fontFamily: "Mitr_200ExtraLight",
        marginLeft: 20,
        fontSize: 18,
        fontWeight: "bold"
    },
    chats:{
        flex: 1, 
        backgroundColor: "white",
        width: "100%",
    },
    sendMessage:{
        width:"100%",
        height: 60,
        alignItems:"center",
        justifyContent:"center",
        
        flexDirection: "row", 
        alignItems:"center",
        justifyContent:"space-around"
    },
    input:{
        width: "80%",
        backgroundColor: "#efefef",
        paddingVertical: 8,
        paddingLeft: 8,
        borderRadius : 20
    }
})
export default ChatPage;