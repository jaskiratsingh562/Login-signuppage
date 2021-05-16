import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import login from "./Login";
import signup from "./signup";
import LoggedIn from "./loggedin";
import forgotpsw from "./forgotpsw";
import tandc from "./tandc";
const Stack = createStackNavigator();

export default function () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen component={login} name="login" />
        <Stack.Screen component={LoggedIn} name="main" />
        <Stack.Screen component={signup} name="signup" />
        <Stack.Screen component={tandc} name="termsandconditions" />
        <Stack.Screen component={forgotpsw} name="forgotpsw" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
