import { ScrollView, StyleSheet, Text, View } from "react-native";
import Form from "../components/Form";
import { Colors } from "../constants/colors";

const SignUp = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>GoCard</Text>
          <Text style={styles.logoDescription}>
            Use <Text style={{ color: Colors.primary50 }}>GoCard</Text> to
            monitor your card transactions from anywhere!
          </Text>
        </View>

        <Form type="SignUp" />
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
    paddingHorizontal: 30,
    paddingVertical: 10,
    gap: 50,
  },
  logoContainer: {
    alignItems: "center",
    gap: 6,
  },
  logoText: {
    fontSize: 25,
    fontWeight: "bold",
    fontStyle: "italic",
    color: Colors.primary50,
  },
  logoDescription: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
  },
});
