import { StyleSheet, View } from "react-native";
import { Colors } from "../constants/colors";
import WalletBalance from "../components/WalletBalance";
import WalletHistory from "../components/WalletHistory";

const Wallet = () => {
  return (
    <View style={styles.container}>
      <WalletBalance />
      <WalletHistory />
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    gap: 30,
  },
});
