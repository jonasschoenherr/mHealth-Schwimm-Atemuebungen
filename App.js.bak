import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen';

// 1. Define Screens
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      {/* Navigate using the navigation object */}
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />

      <Text>Welcome Screen</Text>
      {/* Navigate using the navigation object */}
      <Button
        title="Go to Welcome Screen"
        onPress={() => navigation.navigate('Welcome Screen')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      {/* Go back using the navigation object */}
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

// 2. Create the Stack Navigator
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Wenn du diesen Text lesen kannst, hat alles funktioniert!</Text>
      <StatusBar style="auto" />

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Welcome Screen" component={WelcomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
