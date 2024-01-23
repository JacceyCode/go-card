import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";

const WalletBalance = () => {
  return (
    <View style={styles.card}>
      <View style={styles.idContainer}>
        <Text style={styles.id}>Wallet ID:</Text>
        <Text style={styles.id}>**** **** 1234</Text>
      </View>

      <View style={styles.idContainer}>
        <Text style={styles.balanceText}>Balance:</Text>
        <Text style={styles.balance}> #690,234.00</Text>
      </View>
    </View>
  );
};

export default WalletBalance;

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderColor: Colors.gray600,
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  idContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  id: {
    fontSize: 16,
  },
  balanceText: {
    fontSize: 20,
  },
  balance: {
    fontSize: 28,
    fontWeight: "700",
  },
});
