import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet, StatusBar, Text, TouchableOpacity } from "react-native";
import { useFonts, Mitr_400Regular, Mitr_700Bold, Mitr_600SemiBold, Mitr_200ExtraLight, Mitr_300Light } from '@expo-google-fonts/mitr';
import AppLoading from "expo-app-loading";
import { LinearGradient } from "expo-linear-gradient";
import BottomMenu from "../../components/BottomMenu";
import ChatTile from "../../components/ChatTile";


export default function ChatList(props){
    let [fontsLoaded] = useFonts({
        Mitr_400Regular,
        Mitr_600SemiBold,
        Mitr_700Bold,
        Mitr_200ExtraLight,
        Mitr_300Light
    })
    if (!fontsLoaded) {
        return <AppLoading />
    } else {

    return(
        <View style={styles.container}>
            <LinearGradient colors={["transparent", "transparent"]} style={styles.heading}>
                <Ionicons name="chatbubble" size={40} color="black" />
                <Text style={styles.headingText}>Chats</Text>
            </LinearGradient>
            <Text>-  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -</Text>
            <View style={{width:"100%", alignItems: "center"}}>
                <ChatTile name = "Shivam Akhouri" active="34" navigation={props.navigation}/>
                <ChatTile name = "Suraj Shah" active="45"/>
                <ChatTile name = "Dua Lipa" active="55"/>
                <ChatTile name = "Frank Sinatra" active="43"/>
                <ChatTile name = "Will Smith" active="15"/>
                <ChatTile name = "Chris Rock" active="10"/>
                <ChatTile name = "Chulbul Pandey" active="53"/>
            </View>
            <StatusBar />
            <BottomMenu navigation={props.navigation}/>
        </View>
    );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
        paddingBottom: 4,
    },
    headingText:{
        fontFamily: "Mitr_200ExtraLight",
        marginLeft: 20,
        fontSize: 30,
        letterSpacing: 5
    }
})
