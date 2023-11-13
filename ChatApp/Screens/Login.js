import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { Button } from "react-native";

const Login = () => {
  // to store the details values
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <View
          style={{
            marginTop: 70,
            height: 900,
            width: 1300,
            backgroundColor: "white",
            borderRadius: 20,
          }}
        >
          <Text style={styles.title}>Chat App</Text>
          {/* <Button title="Log in" onPress={() => console.log("Button pressed")}></Button>
          <Button>Sign in</Button> */}

          <View style={styles.inputFields}>
            <View>
              <TextInput
                value={username}
                onChangeText={(text) => setUsername(text)}
                style={styles.inputUsername}
                placeholderTextColor={"grey"}
                placeholder="Username"
              />
            </View>

            <View>
              <TextInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                style={styles.inputPassword}
                placeholderTextColor={"grey"}
                placeholder="Password"
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pinknp",
    padding: 10,
    alignItems: "center",
  },
  title: {
    color: "navy",
    fontSize: 50,
    fontWeight: 600,
    textAlign: "center",
    marginTop: 20,
  },
  inputFields: { marginTop: 50, padding: 50 },
  inputUsername: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    width: 300,
    height: 50,
  },
  inputPassword: {
    marginTop: 20,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    width: 300,
    height: 50,
  },
});
