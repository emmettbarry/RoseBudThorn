import { StatusBar } from "expo-status-bar";
import React, { useState, useRef } from "react";
import Carousel from "simple-carousel-react-native";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
  TextInput,
  Modal,
  TouchableHighlight,
  Button,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Camera, CameraType } from "expo-camera";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef();

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  Login = ({ navigation }) => {
    return (
      <View style={{ borderWidth: 3, justifyContent: "center" }}>
        <Text style={{ marginLeft: 85, fontSize: 20 }}>
          Welcome to Rose Bud Thorn{"\n\n"}
        </Text>

        <Text style={{ marginLeft: 125 }}>Enter your Username</Text>
        <TextInput
          style={{
            width: 200,
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            marginBottom: 20,
            marginLeft: 100,
          }}
          placeholder={"Enter Username"}
          onChangeText={(text) => setUsername(text)}
        />
        <Text style={{ marginLeft: 125 }}>Enter Your Password</Text>
        <TextInput
          style={{
            width: 200,
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            marginBottom: 20,
            marginLeft: 100,
          }}
          placeholder={"Enter Password"}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("RoseBudThorn");
          }}
        >
          <Text
            style={{
              marginLeft: 175,
              marginTop: 10,
              marginBottom: 15,
              color: "blue",
            }}
            title="Login"
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  Profile = () => {
    return (
      <View>
        <Text style={{ marginLeft: 115, marginTop: 10, fontSize: 30 }}>
          {" "}
          Keegan Palmo
        </Text>
        <Text style={{ marginLeft: 170, marginTop: 5 }}>10 Followers</Text>
      </View>
    );
  };

  HomePage = () => {
    
    return (
      <View style={{ marginLeft: 30, marginTop: 10 }}>
        <Carousel>
          <View>
            <Text>Page 1</Text>
          </View>

          <View>
            <Text>Page 2</Text>
          </View>
          <View>
            <Text>Page 3</Text>
          </View>
        </Carousel>
      </View>
    );
  };

  FriendsPage = () => {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            { key: "Devin" },
            { key: "Dan" },
            { key: "Dominic" },
            { key: "Jackson" },
            { key: "James" },
            { key: "Joel" },
            { key: "John" },
            { key: "Jillian" },
            { key: "Jimmy" },
            { key: "Julie" },
          ]}
          renderItem={({ item }) => (
            <Text style={{ fontSize: 25, marginTop: 30, marginLeft: 10 }}>
              {item.key}
            </Text>
          )}
        />
      </View>
    );
  };

  takePic = async () => {
    if (!cameraRef) return;
    const options = {
      quality: 1,
      base64: true,
      exif: false,
    };
    await cameraRef.current.takePicureAsync(options);
  };

  PostPage = () => {
    return (
      <View style={styles.container}>
        <Camera style={styles.camera} type={type} ref={cameraRef}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
              <Text style={styles.textStyle}>Flip Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={takePic}>
              <Text style={styles.textStyle}>Take Picture</Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    );
  };

  Tabs = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Your Feed" component={HomePage}></Tab.Screen>
        <Tab.Screen name="Friends" component={FriendsPage}></Tab.Screen>
        <Tab.Screen name="Post" component={PostPage}></Tab.Screen>
        <Tab.Screen name="Profile" component={Profile}></Tab.Screen>
      </Tab.Navigator>
    );
  };

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
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
  },

  list: {
    flex: 1,
    marginTop: 50,
    backgroundColor: "#FFFFFF",
  },

  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
  },

  listbutton: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 50,
    marginLeft: 50,
    marginRight: 50,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "#009966",
  },

  row: {
    fontSize: 24,
    padding: 42,
    borderWidth: 1,
    borderColor: "#DDDDDD",
    backgroundColor: "#009966",
    alignItems: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
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
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    marginLeft: 20,
    marginRight: 20,
    textAlign: "center",
  },
  camera: {
    flex: 1,
    margin: 50,
    marginLeft: 50,
    marginRight: 50,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
});
