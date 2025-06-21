import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "#888",
        tabBarActiveBackgroundColor: "#ADD9FFFF",
        tabBarInactiveBackgroundColor: "#CDE8FFFF",
        tabBarStyle: {
          backgroundColor: "#CDE8FFFF",
          borderTopWidth: 0,
          elevation: 0,
        },
        headerShown: true,
        headerStyle: {
          backgroundColor: "#CDE8FFFF",
        },
        headerTintColor: "#333",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
        },
        headerTitleAlign: "center",
        headerStatusBarHeight: 5,
        headerShadowVisible: false,
      }}
    >
      <Tab.Screen
        name="LoginPage"
        component={LoginScreen}
        options={{
          tabBarLabel: "Giriş Yap",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="log-in" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="HomePage"
        component={HomeScreen}
        options={{
          tabBarLabel: "Ana Sayfa",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Üçüncü Sayfa",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
