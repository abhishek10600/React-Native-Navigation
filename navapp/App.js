import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // styling header in all screen pages
        screenOptions={
          {
            headerStyle: {
              backgroundColor: "red"
            },
            headerTintColor: "#fff"
            // headerShown: false
          }
        }
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={
            {
              title: "Welcome",
              // headerStyle: {
              //   backgroundColor: "red"
              // },
              // headerTintColor:"#fff"
              // headerShown: false
            }
          }
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={({ route }) => ({
            title: route.params.name,
            headerRight: () => (
              <Button
                title="Count"
              />
            )
            // headerShown: false
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
