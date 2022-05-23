import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput as TI, View } from 'react-native';

export default function TextInput(props) {
  return (
    <TI style={styles.textinput} placeholder={props.placeholder} value={props.value} onChangeText={props.onChange} />
  );
}

const styles = StyleSheet.create({
  textinput:{
      borderBottomColor:"black",
      width: "60%",
      alignSelf: "center",
      borderBottomWidth: 2,
      marginVertical: 10,
      fontSize: 20,
  }
});
