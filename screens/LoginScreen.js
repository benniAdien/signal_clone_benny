import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input, Image } from "@rneui/base";
import { KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { atuh } from "../firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    auth.AuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("Home");
      }
    });
  }, []);

  const signIn = () => {}

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri:
            "https://upload.wikimedia.org/wikipedia/commons/5/56/Logo_Signal..png?20190715211000",
        }}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}>
        <Input 
          placeholder="Email" 
          autoFocus 
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)} 
        />
        <Input 
          placeholder="Password" 
          secureTextEntry 
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)} 
        />
      </View>

      <Button containerStyle={styles.button} onPress={signIn} title="Login" />
      <Button 
        onPress={() => navigation.navigate("Register")}
        containerStyle={styles.button} 
        type="outline" 
        title="Register" 
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
