import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BottomMenu from '../../components/BottomMenu';
import Card from '../../components/Card';

export default function Feed(props){
    return (
        <View style={styles.container}>
            <View style={styles.heading}>
            <Image source={require("../../assets/shareBlockLogo.png")} style={{width: 100, height: 100}} />
                <Text style={styles.headingText}>ShareBlock</Text>
            </View>
            <Text>-   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -    -   -</Text>
            <Card />
            <BottomMenu navigation={props.navigation}/>
            <StatusBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        minHeight:"100%",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    heading:{
        flexDirection: "row",
        alignSelf:"flex-start",
        paddingLeft: 30,
        alignItems: "center",
        paddingTop: 15,
        width: "100%",
        paddingBottom: 0,
    },
    headingText:{
        fontFamily: "Mitr_200ExtraLight",
        marginLeft: 20,
        fontSize: 30,
        letterSpacing: 5
    }
})