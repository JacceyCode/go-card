import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import Wallet from "./Wallet";
import Location from "./Location";
import { Colors } from "../constants/colors";
import { SignOutModal } from "hooks/firebaseAuthHandler";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
      backBehavior="firstRoute"
      screenOptions={{
        tabBarActiveTintColor: Colors.primary100,
        tabBarActiveBackgroundColor: Colors.gray400,
        tabBarLabelStyle: { fontSize: 18 },
        tabBarLabelPosition: "beside-icon",
        headerStyle: { backgroundColor: Colors.gray400 },
        headerTintColor: Colors.primary100,
        headerRight: ({ tintColor }) => (
          <Ionicons
            name="log-out"
            size={35}
            color={tintColor}
            onPress={SignOutModal}
          />
        ),
      }}
    >
      <Tab.Screen
        name="Wallet Details"
        component={Wallet}
        options={{
          tabBarLabel: "Wallet",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="wallet" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Location"
        component={Location}
        options={{
          tabBarLabel: "Locator",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="map" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
