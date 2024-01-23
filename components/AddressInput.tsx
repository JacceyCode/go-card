import { Colors } from "constants/colors";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { getLocation, getMap } from "utils/mapHandler";

const AddressInput = ({ onSetCoords }: any) => {
  const [address, setAddress] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const addressHandler = async (address: string) => {
    try {
      setIsLoading(true);
      const result = await getLocation(address.trim().replaceAll(" ", "+"));

      if (result.status !== "OK") throw Error();

      const lat = result.results[0].geometry.location.lat;
      const lng = result.results[0].geometry.location.lng;

      onSetCoords({ lat: lat, lng: lng });

      setIsLoading(false);
      setAddress(" ");
    } catch (err: any) {
      Alert.alert("Invalid Address. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.card}>
      <TextInput
        style={styles.input}
        placeholder="Enter your address"
        onChangeText={(text) => setAddress(text)}
        value={address}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => addressHandler(address)}
      >
        <Text style={styles.buttonText}>
          {isLoading ? (
            <ActivityIndicator size="small" color={Colors.gray800} />
          ) : (
            "Check Address"
          )}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddressInput;

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderColor: Colors.gray600,
    borderRadius: 6,
    paddingHorizontal: 15,
    paddingVertical: 10,
    gap: 10,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: Colors.gray400,
    paddingHorizontal: 15,
    fontSize: 18,
    color: Colors.gray800,
    backgroundColor: Colors.gray400,
  },
  button: {
    backgroundColor: Colors.primary50,
    borderRadius: 12,
    width: "50%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
  },
});
