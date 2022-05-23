import { StyleSheet, Text, View, Image } from 'react-native';
import CustomButton from '../../components/CustomButton';
import TextInput from '../../components/TextInput';

export default function SignIn(props) {
  return (
    <View style={styles.container}>
        {/* <ScrollView > */}
      <Image source={require("../../assets/shareBlockLogo.png")} style={{width: 150, height: 150, marginTop:"15%",}} />
      <Text style={styles.text}>Login</Text>
      <View style={{flex: 1, width:"100%"}}>

      <TextInput placeholder="Username" />
      <TextInput placeholder="Password" />
        {/* </ScrollView> */}
      </View>

      <CustomButton text="Sign In" icon="chevron-right" onClick={()=>props.navigation.navigate('feed')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  text:{
    fontFamily: 'Mitr_400Regular',
    fontSize: 40,
    
    marginBottom: "15%"
  }
});
