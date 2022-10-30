import { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { AuthContext } from "../navigation/AuthProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen() {
  const { setIsLoggedIn } = useContext(AuthContext);
  const logout = async () => {
    await AsyncStorage.removeItem("@token");
    setIsLoggedIn(false);
  };

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Text>User is logged in!</Text>
      <Button onPress={logout} title="LOGOUT" />
    </View>
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