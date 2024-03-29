import {
  View,
  Text,
  StyleSheet,
  LogBox,
  Dimensions,
  TextInput,
  Pressable,
} from "react-native";
import { useEffect, useState, useContext } from "react";
import Svg, { ClipPath, Ellipse, Image } from "react-native-svg";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
  withDelay,
} from "react-native-reanimated";

import { Colors } from "../constants/colors";
import { AuthContext } from "../navigation/AuthProvider";

// import { INITIAL_BACKGROUND, LOGO } from "../assets";

/**
 * Feature idea
 * one place where teachers can show where they will be and students can book them in one place
 *
 * @param { props } @returns the first screen our user sees when signing into the app
 *
 * TODO:
 *  done - fix Login in animation to reflect only email and password
 *  - Register sends credentials to server
 *  - Login submits and retrives login cookie or whatever
 *  - Create the login screen graphics 
 *  - Have a new floew for onboarding from registering for the first time
 *  - Work on a backend for registration and verification
 *  - 
 */

const { width, height } = Dimensions.get("window");

export default function LandingScreen({ navigation }) {
  const [isRegistering, setRegistering] = useState(false);

  const [emailToregister, setEmail] = useState(``);
  const [passwordToRegister, setPassword] = useState(``);
  const [name, setName] = useState(``);

  const [emailForLogin, setEmailLogin] = useState(``);
  const [passwordForLogin, setPasswordLogin] = useState(``);

  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  // ---
  // this is where the image is positioned on the screen
  const imagePosition = useSharedValue(1);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(
      imagePosition.value,
      [0, 1],
      [-height / 2, 0]
    );
    return {
      transform: [
        {
          translateY: withTiming(interpolation, { duration: 1000 }),
        },
      ],
    };
  });

  const buttonAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [250, 0]);
    return {
      opacity: withTiming(imagePosition.value, { duration: 500 }),
      transform: [
        {
          translateY: withTiming(interpolation, { duration: 1000 }),
        },
      ],
    };
  });

  const closeAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [180, 360]);
    return {
      opacity: withTiming(imagePosition.value === 1 ? 0 : 1, { duration: 800 }),
      transform: [
        {
          rotate: withTiming(interpolation + "deg", { duration: 1000 }),
        },
      ],
    };
  });

  const formAnimatedStyle = useAnimatedStyle(() => {
    // const interpolation = interpolate(imagePosition.value, [0, 1], [180, 360]);
    return {
      opacity:
        imagePosition.value === 0
          ? withDelay(400, withTiming(1, { duration: 800 }))
          : withTiming(0, { duration: 300 }),
    };
  });

  //---

  const loginButtonScreenAnimator = () => {
    setRegistering(false);
    imagePosition.value = 0;
  };

  const registerButtonScreenAnimator = () => {
    setRegistering(true);
    imagePosition.value = 0;
  };

  const submitButtonHandler = async () => {
    console.log(
      "email for login: \n",
      emailForLogin,
      "\n password for login: \n",
      passwordForLogin,
      "\n email for reg: \n",
      emailToregister,
      "\n name for reg: \n",
      name,
      "\n password for reg: \n",
      passwordToRegister
    );
    setIsLoggedIn((prev) => !prev);
  };

  //---

  useEffect(() => {
    LogBox.ignoreLogs(["EventEmitter.removeListener"]);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyle]}>
        <Svg height={height + 100} width={width}>
          <ClipPath id="clipPathId">
            <Ellipse cx={width / 2} rx={height} ry={height + 100} />
          </ClipPath>
          {/* <Image
            href={INITIAL_BACKGROUND}
            height={height + 100}
            width={width}
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#clipPathId)"
          /> */}
        </Svg>
        <Animated.View
          style={[styles.closeButtonContainer, closeAnimatedStyle]}
        >
          <Text onPress={() => (imagePosition.value = 1)}>X</Text>
        </Animated.View>
      </Animated.View>
      {/* <View style={}>
        <Image href={LOGO} style={styles.logo} />
        <Text style={styles.text}>
          Be one with dance dare to grow your passion
        </Text>
      </View>  */}
      <View style={styles.footer}>
        <Animated.View style={buttonAnimatedStyle}>
          <Pressable
            style={styles.formButton}
            onPress={loginButtonScreenAnimator}
          >
            <Text style={styles.formButtonText}>LOG IN</Text>
          </Pressable>
        </Animated.View>
        <Animated.View style={buttonAnimatedStyle}>
          <Pressable
            style={styles.formButton}
            onPress={registerButtonScreenAnimator}
          >
            <Text style={styles.formButtonText}>REGISTER</Text>
          </Pressable>
        </Animated.View>

        <Animated.View style={[styles.formInputContainer, formAnimatedStyle]}>
          <TextInput
            placeholder="Email"
            style={styles.textInput}
            onChangeText={(e) => {
              isRegistering ? setEmail(e) : setEmailLogin(e);
            }}
          />
          {isRegistering ? (
            <TextInput
              placeholder="Full Name"
              style={styles.textInput}
              onChangeText={setName}
            />
          ) : null}
          <TextInput
            placeholder="Password"
            style={styles.textInput}
            onChangeText={(e) => {
              isRegistering ? setPassword(e) : setPasswordLogin(e);
            }}
          />
          <Pressable style={styles.formButton} onPress={submitButtonHandler}>
            <Text style={styles.formButtonText}>
              {isRegistering ? `REGISTER` : `LOG IN`}
            </Text>
          </Pressable>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  closeButtonContainer: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignSelf: "center",
    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 1,
    backgroundColor: Colors.WHITE,
    alignItems: "center",
    borderRadius: 20,
    top: -20,
  },
  // logo: {
  //   width: RFValue(130),
  //   height: RFValue(130),
  //   marginTop: RFValue(50),
  //   marginBottom: RFValue(20),
  //   opacity: 0.7,
  // },
  textInput: {
    height: 50,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 25,
    paddingLeft: 10,
  },
  formInputContainer: {
    marginBottom: 70,
    ...StyleSheet.absoluteFill,
    zIndex: -1,
    justifyContent: "center",
  },
  formButtonText: {
    fontSize: 20,
    fontWeight: "600",
    color: Colors.WHITE,
    letterSpacing: 0.5,
  },
  formButton: {
    //AKA button
    backgroundColor: Colors.blue,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: Colors.WHITE,
    // shadow generator
    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  footer: {
    // AKA BottomContainer
    justifyContent: "center",
    height: height / 3,
  },
});
