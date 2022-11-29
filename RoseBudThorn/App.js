import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
  TextInput,
  Modal,
  TouchableHighlight
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  Login = ({navigation}) => {
    return(
      <View style={styles.container}>
        <Text>Welcome to Rose Bud Thorn{'\n\n'}</Text>

        <Text>Enter your Username</Text>
        <TextInput
          style={{height:40, borderWidth:1, length: 50, alignContent: "center"}}
          placeholder={'Enter Username'}
          onChangeText={text => setUsername(text)}
        />
        <Text>Enter Your Password</Text>
        <TextInput
          style={{height:40, borderWidth:1, length: 50, alignContent: "center"}}
          placeholder={'Enter Password'}
          onChangeText={text => setPassword(text)}
        />

        <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('RoseBudThorn')}}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }


  Profile = () => {
    return(
      <View style={styles.container}>
        <Text>This is the Profile Page</Text>
      </View>
    );
  }

  HomePage = () => {
    return(
      <View style={styles.container}>
        <Text>This is the Home Page</Text>
      </View>
    );
  }
  
  FriendsPage = () => {
    return(
      <View style={styles.container}>
        <Text>This is the Friends Page</Text>
      </View>
    );
  }

  PostPage = () => {
    return(
      <View style={styles.container}>
        <Text>This is the new post page</Text>
      </View>
    );
  }

  Tabs = () => {
    return(
    <Tab.Navigator>
      <Tab.Screen name="Your Feed" component={HomePage}></Tab.Screen>
      <Tab.Screen name="Friends" component={FriendsPage}></Tab.Screen>
      <Tab.Screen name="Post" component={PostPage}></Tab.Screen>
      <Tab.Screen name="Profile" component={Profile}></Tab.Screen>
    </Tab.Navigator>
    )
  }


  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={Login}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="RoseBudThorn" component={Tabs} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  list: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#FFFFFF',
  },

  button: {
    alignItems: "center",
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    marginRight:30,
    borderRadius:10,
    borderWidth: 1,
    backgroundColor: "#009966",
  },

  listbutton: {
    alignItems: "center",
    marginTop:10,
    marginBottom:50,
    marginLeft: 50,
    marginRight: 50,
    paddingTop:15,
    paddingBottom:15,
    borderRadius:10,
    borderWidth: 1,
    backgroundColor: "#009966",
  },


  row: {
    fontSize: 24, 
    padding: 42, 
    borderWidth: 1,
    borderColor: "#DDDDDD",
    backgroundColor: '#009966',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    marginLeft:20,
    marginRight:20,
    textAlign: "center"
  }


});
