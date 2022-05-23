import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import ChatList from './pages/ChatList';
import ChatPage from './pages/ChatPage';
import Feed from './pages/Feeds';
import Profile from './pages/Profile';
import Search from './pages/Search';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Welcome from './pages/Welcome';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='welcome' screenOptions={{headerShown:false}}>
        <Stack.Screen name="welcome" component={Welcome}/>
        <Stack.Screen name="signup" component={SignUp}/>
        <Stack.Screen name="signin" component={SignIn}/>
        <Stack.Screen name="profile" component={Profile}/>
        <Stack.Screen name="chatlist" component={ChatList}/>
        <Stack.Screen name="search" component={Search}/>
        <Stack.Screen name="feed" component={Feed}/> 
        <Stack.Screen name="chatpage" component={ChatPage}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
