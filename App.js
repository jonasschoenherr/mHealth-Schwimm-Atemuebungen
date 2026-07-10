import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen';
import { NativeRouter, Route, Switch, Link, withRouter, useNavigate } from 'react-router-native';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

/*
const Routes = () => (
  <NativeRouter>
    <Route exact path="/" component={HomeScreen} />
    <Route exact path="/welcome" component={WelcomeScreen} />
  </NativeRouter>
);
*/

// 1. Define Screens
function HomeScreen({ history }) {
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


// 1. Die Home-Komponente
const Home = () => {
  const navigate = useNavigate();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Willkommen auf der Startseite!</Text>
      {/* Navigation via Link-Komponente */}
      <Link to="/about" underlayColor="#f0f4f7">
        <View style={styles.button}>
          <Text style={styles.buttonText}>Gehe zu Über uns (Link)</Text>
        </View>
      </Link>
      
      {/* Navigation via history.push (programmatisch) */}
      <Button 
        title="Gehe zu Über uns (Button)" 
        onPress={() => navigate('/about')} 
      />
    </View>
  );
};

// 2. Die Über uns-Komponente
const About = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Das ist die Über uns Seite.</Text>
    <Link to="/" underlayColor="#f0f4f7">
      <View style={styles.button}>
        <Text style={styles.buttonText}>Zurück zur Startseite</Text>
      </View>
    </Link>
  </View>
);

export default function App() {
  const navigate = useNavigate();

  return (
    <View style={styles.container}>
      <NativeRouter>
          {/* Switch sorgt dafür, dass nur die erste passende Route gerendert wird */}
          <Switch>
            <Route exact path="/" component={navigate("/")} />
            <Route path="/about" component={navigate("/about")} />
          </Switch>
        </NativeRouter>
    </View>
  );

  /*
    <View style={styles.container}>
      <Text>Wenn du diesen Text lesen kannst, hat alles funktioniert!</Text>
      <StatusBar style="auto" />

      <Routes />

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Welcome Screen" component={WelcomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
    */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
