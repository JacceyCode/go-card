import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../constants/colors";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

type Data = {
  email: string;
  password: string;
};

const Form = ({ type }: { type?: string }) => {
  const navigation =
    useNavigation<NavigationProp<ReactNavigation.RootParamList>>();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFocused1, setIsFocused1] = useState<boolean>(false);
  const [isFocused2, setIsFocused2] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const userData = {
    email,
    password,
  };

  const signInHandler = async (data: Data) => {
    try {
      setIsLoading(true);
      const { email, password } = data;

      // Regular expression for email and password verification
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const passwordRegex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

      // Validation for Email, Password.
      const isValidEmail = emailRegex.test(email);
      const isValidPassword = passwordRegex.test(password.trim());

      // Error handling of user Input
      if (!isValidEmail || !isValidPassword) {
        setEmailError(!isValidEmail);
        setPasswordError(!isValidPassword);
        return;
      }

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password.trim()
      );
      const user = userCredential.user;
      setIsLoading(false);

      navigation.navigate("HomeScreen");

      setEmail("");
      setPassword("");
    } catch (err: any) {
      Alert.alert(err.message);
      setIsLoading(false);
    }
  };

  const signUpHandler = async (data: Data) => {
    try {
      setIsLoading(true);
      const { email, password } = data;

      // Regular expression for email and password verification
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const passwordRegex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

      // Validation for Email, Password.
      const isValidEmail = emailRegex.test(email);
      const isValidPassword = passwordRegex.test(password.trim());

      // Error handling of user Input
      if (!isValidEmail || !isValidPassword) {
        setEmailError(!isValidEmail);
        setPasswordError(!isValidPassword);
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password.trim()
      );
      const user = userCredential.user;
      setIsLoading(false);

      navigation.navigate("HomeScreen");

      setEmail("");
      setPassword("");
    } catch (err: any) {
      Alert.alert(err.message);
      setIsLoading(false);
    }
  };

  const navigationHandler = () => {
    setEmail("");
    setPassword("");

    navigation.navigate(`${type === "SignUp" ? "SignIn" : "SignUp"}`);
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.formHeading}>{`Sign ${
        type === "SignUp" ? "Up" : "In"
      }`}</Text>

      <View style={styles.inputContainer}>
        <View>
          <TextInput
            style={[
              styles.input,
              isFocused1 && styles.inputFocused,
              emailError && styles.inputError,
            ]}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            value={email}
            onFocus={() => {
              setEmailError(false), setIsFocused1(true);
            }}
            onBlur={() => setIsFocused1(false)}
            keyboardType="email-address"
          />
        </View>

        <View>
          <View style={styles.passwordContainer}>
            <TextInput
              style={[
                styles.input,
                isFocused2 && styles.inputFocused,
                passwordError && styles.inputError,
              ]}
              placeholder="Password"
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry={!showPassword ? true : false}
              onFocus={() => {
                setPasswordError(false), setIsFocused2(true);
              }}
              onBlur={() => setIsFocused2(false)}
            />
            <Pressable
              onPress={() => setShowPassword((prev) => !prev)}
              style={styles.passwordIcon}
            >
              <Ionicons
                name={!showPassword ? "eye-off-outline" : "eye-outline"}
                size={24}
                color="black"
              />
            </Pressable>
          </View>
          <Text style={{ fontSize: 12, color: Colors.error }}>
            Password should be a minimun of 8 characters in the format of
            'ASdf1234@&*#$%'
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            type === "SignUp"
              ? signUpHandler(userData)
              : signInHandler(userData);
          }}
        >
          <Text style={styles.buttonText}>
            {isLoading ? (
              <ActivityIndicator size="small" color={Colors.gray800} />
            ) : (
              `Sign ${type === "SignUp" ? "Up" : "In"}`
            )}
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.linkText}>
        Already have an account?{" "}
        <Text onPress={navigationHandler} style={styles.link}>
          {`Sign ${type === "SignUp" ? "In" : "Up"}`}
        </Text>
      </Text>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: "lightgray",
    width: "100%",
    borderRadius: 20,
    alignItems: "center",
    gap: 40,
    paddingVertical: 20,
  },
  formHeading: {
    textDecorationLine: "underline",
    fontSize: 22,
    color: Colors.primary100,
  },
  inputContainer: {
    width: "100%",
    gap: 15,
    paddingHorizontal: 10,
  },
  input: {
    width: "100%",
    height: 60,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: Colors.gray400,
    paddingHorizontal: 15,
    fontSize: 18,
    color: Colors.gray800,
    backgroundColor: Colors.gray400,
  },
  inputFocused: {
    borderColor: Colors.primary50,
  },
  inputError: {
    borderColor: Colors.error,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  passwordIcon: {
    position: "absolute",
    right: 10,
  },
  button: {
    backgroundColor: Colors.primary50,
    borderRadius: 15,
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: Colors.white,
    fontSize: 18,
  },
  linkText: {
    color: Colors.gray800,
    fontSize: 15,
  },
  link: {
    color: Colors.primary100,
    fontSize: 20,
  },
});
