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

export default function RegistrationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <ImageBackground
        source={require("../assets/background.png")}
        style={{
          flex: 1,
        }}
        resizeMode="cover"
      > */}
        <ScrollView>
          <View style={styles.topContainer}>
            <Text style={styles.title}>Get Started</Text>
            <Text style={styles.subtitle}>Sign up to continue</Text>
          </View>
          <View style={styles.dataContainer}>
            <TextInput
              placeholder="Email"
              style={styles.textinput}
              placeholderTextColor={COLORS.white}
            />
            <TextInput
              placeholder="Contact Number"
              style={styles.textinput}
              placeholderTextColor={COLORS.white}
              keyboardType='numeric'
              maxLength={10}
            />
            <TextInput
              placeholder="Password"
              style={styles.textinput}
              placeholderTextColor={COLORS.white}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Onboarding")}>
              <View style={styles.button1}>
                <Text style={styles.btnText}>SIGN UP</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Onboarding")}>
              <View style={styles.button2}>
                <View style={styles.logo}>
                  {/* <Image
                    source={require("../assets/facebook.png")}
                    resizeMode="contain"
                    style={{
                      width: 30,
                      height: 30,
                    }}
                  /> */}
                </View>
                <Text style={styles.btnText}>Sign In with facebook</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.text}>
                Already have an account? | Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      {/* </ImageBackground> */}
    </View>
  );
  // <View style={styles.container}>
  //   <Text>Registration screen</Text>
  //   <Button
  //     onPress={() => navigation.navigate("Onboarding")}
  //     title="Complete Registration and Onboard"
  //   />
  // </View>
}

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
