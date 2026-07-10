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
