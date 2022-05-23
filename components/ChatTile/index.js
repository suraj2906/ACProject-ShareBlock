import { Feather, FontAwesome5, Ionicons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { View, Image, StyleSheet, Text, TouchableOpacity, Modal, Pressable, Alert } from 'react-native';
import {useState} from 'react';

export default function ChatTile(props) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <TouchableOpacity style={styles.container} onPress={()=>props.navigation.navigate("chatpage")} onLongPress={()=>setModalVisible(true)}>
            <Image source={require("../../assets/images.png")} style={styles.image} />
            <View>
                <Text style={styles.title}>{props.name}</Text>
                <Text style={styles.lastmsg}>Active {props.active}m ago</Text>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                <TouchableOpacity style={{ alignItems: "center", padding: 8, borderRadius: 20 }}>
                    <Feather name="camera" size={25} color="#5e5e5e" />
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: "center", padding: 8, borderRadius: 20 }}>
                    <Feather name="phone" size={25} color="#5e5e5e" />
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: "center", padding: 8, borderRadius: 20 }}>
                    <Feather name="video" size={25} color="#5e5e5e" />
                </TouchableOpacity>
            </View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
               <View style={styles.center}>
                    <Text style={styles.heading}>Shivam Akhouri</Text>
                    <View style={{marginTop: "2%"}}>
                        <TouchableOpacity>
                            <Text style={styles.textbutton}>
                            <Ionicons name='md-volume-mute-outline' size={25} color="#3d3d3d" />{"  "}Mute
                            </Text>
                        </TouchableOpacity>
                        <Text style={{alignSelf: "center"}}>-  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - </Text>
                        <TouchableOpacity>
                            <Text style={styles.textbutton}>
                                <MaterialCommunityIcons name="block-helper" size={20} color="#3d3d3d" /> {" "}Block
                            </Text>
                        </TouchableOpacity>
                        <Text style={{alignSelf: "center"}}>-  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - </Text>
                        <TouchableOpacity>
                            <Text style={[styles.textbutton, {color: "red"}]}>
                                <Octicons name="report" size={20} color="red"/> {" "}Report
                            </Text>
                        </TouchableOpacity>
                    </View>
               </View>
            </Modal>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "94%",
        marginTop: 5,
        marginBottom: 5,
        height: 70,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: "black",
        marginRight: 20
    },
    title: {
        fontFamily: "Mitr_400Regular",
        fontSize: 16
    },
    lastmsg: {
        fontFamily: "Mitr_200ExtraLight",
        color: "#aeaeae"
    },
    center:{
        alignSelf:"center",
        width: "70%",
        height: "40%",
        backgroundColor: "white",
        borderRadius: 20,
        marginTop: "60%",
        elevation: 200
    },
    heading:{
        alignSelf: "center",
        fontFamily: "Mitr_400Regular",
        fontSize: 17,
        color: "#3d3d3d",
        width: "100%",
        textAlign: "center",
        paddingVertical: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: "#ebe1f9"
    },
    textbutton:{
        width: "100%",
        textAlign:"center",
        paddingVertical: 15,
        fontFamily: "Mitr_300Light",
        fontSize: 15,
        alignItems: "center",
        justifyContent: "center"
    }
})