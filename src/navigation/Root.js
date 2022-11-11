import { useState, useEffect, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import * as Font from "expo-font";
import { AuthContext } from "./AuthProvider";
import { customFonts } from "../constants";
// import axios from "axios";

import Tabs from "./Tabs";
import { StyleSheet, View, ActivityIndicator, StatusBar } from "react-native";

import {
  EventDetail,
  HomeScreen,
  LandingScreen,
  LoginScreen,
  OnboardingScreen,
  RegistrationScreen,
  ForgotPasswordScreen,
} from "../screens";

const Stack = createStackNavigator();

// const eventbriteAPIKEY = `LDSAPP34HKZNFFZPGXZB`;
// const eventbriteAUTHURL = `https://www.eventbriteapi.com/v3/users/me/?token=`
// const eventbriteAPI = `https://www.eventbriteapi.com/v3/`
// const eventBriteSEARCH = `https://www.eventbriteapi.com/v3/events/search/`

export default function Root() {
  const [assetsLoaded, setAssetLoaded] = useState(() => false);
  const [checking, setIsChecking] = useState(() => true);

  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const { getItem } = useAsyncStorage("@token");

  /* Loading custom fonts in async */
  const _loadAssetsAsync = async () => {
    await Font.loadAsync(customFonts);
    setAssetLoaded(prev => !prev);
  };

  const checkIfUserIsLoggedIn = async () => {
    const item = await getItem();

    // user is logged in
    if (item !== null) {
      setIsLoggedIn(prev => !prev);
    }

    setIsChecking(prev => !prev);
  };

  // ---
 
  useEffect(() => {
    _loadAssetsAsync();
    checkIfUserIsLoggedIn();
  }, []);

  // ---

  if (checking) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }

  return assetsLoaded ? (
    <NavigationContainer>
      <StatusBar barStyle="light-content"></StatusBar>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        // initialRouteName="Featured"
      >
        {isLoggedIn ? (
          <>
            {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
            <Stack.Screen name="Featured" component={Tabs} />
            <Stack.Screen name="EventDetail" component={EventDetail} />
          </>
        ) : (
          <>
            <Stack.Screen name="Landing" component={LandingScreen} />
            {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
            {/* <Stack.Screen name="Register" component={RegistrationScreen} /> */}
            <Stack.Screen name="ForgotP" component={ForgotPasswordScreen} />
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <ActivityIndicator size="small" />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
