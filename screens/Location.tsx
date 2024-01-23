import { StyleSheet, Text, View } from "react-native";
import AddressInput from "components/AddressInput";
import MapView from "components/MapView";
import { useState } from "react";

export interface Coordinates {
  lat: number;
  lng: number;
}

const Location = () => {
  const [coords, setCoords] = useState<Coordinates>();

  const onSetCoords = (data: Coordinates) => {
    setCoords(data);
  };

  return (
    <View style={styles.container}>
      <AddressInput onSetCoords={onSetCoords} />
      {coords && <MapView coords={coords} />}
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    gap: 30,
  },
});
