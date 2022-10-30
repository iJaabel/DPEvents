import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  Image,
  Pressable,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../constants/colors";
import { INITIAL_BACKGROUND, LOGO } from "../../assets";
import { LogBox } from "react-native";
import { useEffect } from "react";

export default function LandingScreen({ navigation }) {

  useEffect(()=>{
    LogBox.ignoreLogs(["EventEmitter.removeListener"]);
  }, [])

  return (
    <View style={styles.body}>
      <ImageBackground source={INITIAL_BACKGROUND} style={styles.background}>
        <Image source={LOGO} style={styles.logo} />
        <Text style={styles.text}>
          Be one with dance dare to grow your passion
        </Text>
        <View style={styles.footer}>
          <Button
            title="Get Started"
            disabled={false}
            onPress={() => navigation.navigate("Register")}
          />
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginText}>Or login</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: RFValue(25),
    fontWeight: "300",
    color: Colors.LIGHT_GREY,
    textAlign: "center",
    marginHorizontal: RFValue(50),
  },
  background: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  logo: {
    width: RFValue(130),
    height: RFValue(130),
    marginTop: RFValue(50),
    marginBottom: RFValue(20),
    opacity: 0.7,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  loginText: {
    fontSize: RFValue(20),
    marginTop: RFValue(20),
    color: Colors.LIGHT_GREY,
    marginBottom: RFValue(50),
    textAlign: "center",
    fontWeight: "500",
  },
});
