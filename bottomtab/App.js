import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={
        {
          tabBarActiveTintColor: "tomato",
        }
      }>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={
            {
              title: "Welcome",
              tabBarIcon: ({ color, size }) => (
                <Entypo name="home" size={size} color={color} />
              )
            }
          }
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={
            {
              tabBarIcon: ({ color, size }) => (
                <Entypo name="user" size={size} color={color} />
              )
            }
          }
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={
            {
              tabBarIcon: ({ size, color }) => (
                <Ionicons name="settings" size={size} color={color} />
              )
            }
          }
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}