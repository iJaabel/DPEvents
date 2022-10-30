import { useContext } from "react";
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

import { AuthContext } from "../navigation/AuthProvider";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { COLORS } from "../constants";

import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

const SIZES = {
  h1: 22,
  h2: 20,
  h3: 18,
  h4: 16,
  h5: 14,
  h6: 12,

  width,
  height,
};

export default ({ navigation }) => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const { setItem } = useAsyncStorage("@token");

  const logInUser = async () => {
    setIsLoggedIn(true);
    await setItem("DUMMY TOKEN");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/background.png")}
        style={{
          flex: 1,
        }}
        resizeMode="cover"
      >
        <ScrollView>
          <View style={styles.topContainer}>
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>Sign in to continue</Text>
          </View>
          <View style={styles.dataContainer}>
            <TextInput
              placeholder="Username"
              style={styles.textinput}
              placeholderTextColor={COLORS.white}
            />
            <TextInput
              placeholder="Password"
              style={styles.textinput}
              placeholderTextColor={COLORS.white}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={logInUser}>
              <View style={styles.button1}>
                <Text style={styles.btnText}>SIGN IN</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={logInUser}>
              <View style={styles.button2}>
                <View style={styles.logo}>
                  <Image
                    source={require("../../assets/facebook.png")}
                    resizeMode="contain"
                    style={{
                      width: 30,
                      height: 30,
                    }}
                  />
                </View>
                <Text style={styles.btnText}>Connect with facebook</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("ForgotP")}
            >
              <Text style={styles.text}>
                Forgot your password? | Click here
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={styles.text}>Don't have an account? | Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    marginTop: 100,
    alignItems: "center",
  },
  title: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: SIZES.h1 * 1.5,
  },
  subtitle: {
    color: COLORS.white,
    fontSize: SIZES.h4,
    paddingTop: 3,
  },
  dataContainer: {
    marginTop: 50,
  },
  textinput: {
    color: COLORS.white,
    fontSize: SIZES.h3,
    borderBottomColor: COLORS.lightGrey,
    borderBottomWidth: 1,
    paddingVertical: 15,
    marginHorizontal: 15,
    marginVertical: 5,
  },
  btnContainer: {
    marginTop: 50,
  },
  button1: {
    backgroundColor: COLORS.primary,
    padding: 20,
    marginHorizontal: 30,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  btnText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: SIZES.h4,
  },
  button2: {
    flexDirection: "row",
    backgroundColor: COLORS.blue,
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 30,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    marginRight: 10,
  },
  text: {
    color: COLORS.white,
    textAlign: "center",
    marginTop: 10,
    fontWeight: "600",
    fontSize: SIZES.h5,
  },
  bottomContainer: {
    justifyContent: "center",
    marginTop: 50,
  },
});
