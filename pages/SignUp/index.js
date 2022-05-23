import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Button from '../../components/Button';
import CustomButton from '../../components/CustomButton';
import TextInput from '../../components/TextInput';

export default function SignUp() {
    return (
        <View style={styles.container}>

            <Text style={styles.text}>Sign Up</Text>
            <View style={{ flex: 1, width: "100%" }} >
                <TextInput placeholder="First Name" />
                <TextInput placeholder="Last Name" />
                <TextInput placeholder="Age" />
                <TextInput placeholder="Birth Date" />
                <TextInput placeholder="Email" />
                <TextInput placeholder="Phone Number" />
            </View>

            <CustomButton text="Create Account" icon="chevron-right" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        minHeight: "100%"
        // justifyContent: 'center',
    },
    text: {
        fontFamily: 'Mitr_400Regular',
        fontSize: 40,
        marginTop: "5%",
        marginBottom: "15%"
    }
});
