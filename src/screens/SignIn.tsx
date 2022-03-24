import React from "react";
import { Pressable, TextInput, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";

import { Auth } from "aws-amplify";

const SignInPage = () => {
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [code, setCode] = React.useState<string>("");

  const signUp = async () => {
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email, // optional
        },
      });
      console.log(user);
    } catch (error) {
      console.log("error signing up:", error);
    }
  };

  const confirmSignUp = async () => {
    try {
      await Auth.confirmSignUp(username, code);
    } catch (error) {
      console.log("error confirming sign up", error);
    }
  };

  const signIn = async () => {
    try {
      const user = await Auth.signIn(username, password);
      console.log(`Signed in user is: `, user);
    } catch (error) {
      console.log("error signing in", error);
    }
  };

  return (
    <>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text>Sign In</Text>
        <TextInput
          style={{
            backgroundColor: "blue",
            marginVertical: "5%",
            width: "50%",
          }}
        />
        <Text>Sign Up</Text>
        <Text>Username</Text>
        <TextInput
          style={{
            backgroundColor: "yellow",
            marginVertical: "5%",
            width: "50%",
          }}
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <Text>Password</Text>
        <TextInput
          style={{
            backgroundColor: "yellow",
            marginVertical: "5%",
            width: "50%",
          }}
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <Text>Email</Text>
        <TextInput
          style={{
            backgroundColor: "yellow",
            marginVertical: "5%",
            width: "50%",
          }}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Pressable
          style={{
            backgroundColor: "grey",
            width: "50%",
            alignItems: "center",
          }}
          onPress={signUp}
        >
          <Text>SignUp</Text>
        </Pressable>
        <Pressable style={{ backgroundColor: "grey", marginVertical: "5%" }}>
          <Text>Sign Out</Text>
        </Pressable>
        <Text>Confirm Account</Text>
        <TextInput
          keyboardType="numeric"
          style={{ width: "50%", backgroundColor: "blue" }}
          value={code}
          onChangeText={(text) => {
            setCode(text);
          }}
        />
        <Pressable
          style={{ width: "50%", alignItems: "center", marginTop: 3 }}
          onPress={confirmSignUp}
        >
          <Text>Confirm Account</Text>
        </Pressable>
        <Pressable
          style={{
            width: "50%",
            backgroundColor: "magenta",
            alignItems: "center",
            marginTop: 3,
          }}
          onPress={signIn}
        >
          <Text>Sign In</Text>
        </Pressable>
      </View>
    </>
  );
};

export default SignInPage;

const styles = StyleSheet.create({});

/* ---------- Sign in ---------- */
/*

*/
/*           EndSignIn                        */
/* ---------- Sign out ---------- */
/*
async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}
*/
/*           EndSignOut                        */
