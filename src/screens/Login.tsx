import React from "react";
import { Pressable, TextInput, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";

import { Auth } from "aws-amplify";

const LoginPage = () => {
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [code, setCode] = React.useState<string>("");

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

export default LoginPage;

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
