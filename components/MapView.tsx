import { Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "constants/colors";
import { getMap } from "utils/mapHandler";
import { Coordinates } from "screens/Location";

const MapView = ({ coords }: any) => {
  const lat = coords.lat.toString();
  const lng = coords.lng.toString();
  return (
    <View style={styles.container}>
      {coords && (
        <Image style={styles.image} source={{ uri: getMap(lat, lng) }} />
      )}
    </View>
  );
};

export default MapView;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 400,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: Colors.gray600,
    borderRadius: 6,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
