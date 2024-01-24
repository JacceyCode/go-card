import { auth } from "firebase/firebase";
import { Alert } from "react-native";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

type AuthData = {
  email: string;
  password: string;
};

// Sign In Handler
export const signInHandler = async (data: AuthData) => {
  try {
    const { email, password } = data;

    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    return user;
  } catch (err: any) {
    Alert.alert("Invalid Email/Password");
    throw Error();
  }
};

// Sign Up Handler
export const signUpHandler = async (data: AuthData) => {
  try {
    const { email, password } = data;

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    return user;
  } catch (err: any) {
    Alert.alert("Email already in use");
    throw Error();
  }
};

// Sign Out Handler
const handleSignout = async () => {
  await auth.signOut();
};

export const SignOutModal = () => {
  Alert.alert("Sign Out", "Do you really want to logout", [
    {
      text: "Cancel",
    },
    { text: "Sign Out", onPress: handleSignout },
  ]);
};
