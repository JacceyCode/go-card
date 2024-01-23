import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";
import { Data } from "../data/transactions";

const TransactionCard = ({ item }: { item: Data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{item.date}</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.details}>{item.description}</Text>
        <Text style={styles.amount}>{item.amount}.00</Text>
      </View>
    </View>
  );
};

export default TransactionCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.gray600,
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 10,
  },
  date: {
    color: Colors.white,
    fontSize: 18,
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  details: {
    color: Colors.white,
    fontSize: 18,
  },
  amount: {
    color: Colors.white,
    fontSize: 22,
  },
});
