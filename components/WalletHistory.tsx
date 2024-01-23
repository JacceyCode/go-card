import { FlatList, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";
import TransactionCard from "./TransactionCard";
import { Transactions } from "../data/transactions";

const WalletHistory = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Wallet History</Text>

      <FlatList
        data={Transactions}
        renderItem={({ item }) => <TransactionCard item={item} />}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default WalletHistory;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.gray600,
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 150,
    gap: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
  },
});
