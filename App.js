import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardingStartScreen from './screens/OnboardingStartScreen';
import OnboardingGeneralQuestionsScreen from './screens/OnboardingGeneralQuestionsScreen';
import OnboardingHoldBreathScreen from './screens/OnboardingHoldBreathScreen';
import HomeScreen from './screens/HomeScreen';
import BreathingExerciseRunning from './screens/BreathingExerciseRunning';
import BreathingExerciseFinished from './screens/BreathingExerciseFinished';
import {
  userFinishedStartScreen,
  userFinishedGeneralQuestionsScreen,
  userFinishedHoldBreathScreen
} from './state/onboarding';


const Stack = createNativeStackNavigator();

function HomeScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Button
        title="Zu Details (string gesteuert)"
        onPress={() => navigation.navigate('Details')}
      />
      <View style={styles.spacer} />
      <Button
        title="Programmatisch: Wechsel zu Settings nach 1s"
        onPress={() => {
          // Beispiel: Wechsel durch Code (z.B. nach API-Call oder Timer)
          setTimeout(() => {
            navigation.navigate('Settings');
          }, 1000);
        }}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
      <Button
        title="Zurück Home"
        onPress={() => navigation.navigate('Home')}
      />
      <View style={styles.spacer} />
      <Button
        title="Programmatisch: Wechsel zu Home (Code)"
        onPress={() => {
          // Beispiel für programmatischen Wechsel zwischen zwei Screens
          // Hier wird per Code von Details zu Home navigiert
          navigation.navigate('Home');
        }}
      />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings Screen</Text>
      <Button
        title="Zu Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

export default function App() {
  let firstScreen = null;

  if (!userFinishedStartScreen.get()) {
    firstScreen = "/onboarding/start";
  }
  else if (!userFinishedGeneralQuestionsScreen.get()) {
    firstScreen = "/onboarding/general_questions";
  }
  else if (!userFinishedHoldBreathScreen.get()) {
    firstScreen = "/onboarding/hold_breath";
  }
  else {
    firstScreen = "/home";
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={firstScreen}>
        <Stack.Screen name="/onboarding/start" component={OnboardingStartScreen} />
        <Stack.Screen name="/onboarding/general_questions" component={OnboardingGeneralQuestionsScreen} />
        <Stack.Screen name="/onboarding/hold_breath" component={OnboardingHoldBreathScreen} />
        <Stack.Screen name="/home" component={HomeScreen} />
        <Stack.Screen name="/breathing_exercise/running" component={BreathingExerciseRunning} />
        <Stack.Screen name="/breathing_exercise/finished" component={BreathingExerciseRunning} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 22,
    marginBottom: 16
  },
  spacer: {
    height: 12
  }
});
