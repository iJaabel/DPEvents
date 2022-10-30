import React, { useContext } from "react";
import { View, StyleSheet, Button } from "react-native";
import { StyText, StyIcon, StyAvatar } from "../components";
// import { dummyData, FONTS, SIZES, COLORS, icons, images } from "../constants";
// import axios from "axios";
import { AuthContext } from "../navigation/AuthProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Mine = ({ params }) => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const logout = async () => {
    await AsyncStorage.removeItem("@token");
    setIsLoggedIn(false);
  };

  return (
    <View style={styles.container}>
      {/* top bar */}
      <View></View>

      <StyText h1>Heading level 1</StyText>
      <StyText h2>Heading level 2</StyText>
      <StyText h3>Heading level 3</StyText>
      <StyText h4>Heading level 4</StyText>
      <StyText h5>Heading level 5</StyText>
      <StyText h6>Heading level 6</StyText>
      <StyText body1>Body level 1</StyText>
      <StyText body2>Body level 2</StyText>
      <StyText body3>Body level 3</StyText>
      <StyText body4>Body level 4</StyText>
      <StyText body5>Body level 5</StyText>
      <StyText body6>Body level 6</StyText>
      <Button onPress={logout} title="LOGOUT" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Mine;
