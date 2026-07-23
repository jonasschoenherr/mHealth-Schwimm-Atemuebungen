import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Onboarding1 from './screens/Onboarding1';
import Onboarding2 from './screens/Onboarding2';
import Onboarding3 from './screens/Onboarding3';
import HomeScreen from './screens/HomeScreen';
import BreathingExerciseRunning from './screens/BreathingExerciseRunning';
import BreathingExerciseFinished from './screens/BreathingExerciseFinished';

import {
  userFinishedStartScreen,
  userFinishedGeneralQuestionsScreen,
  userFinishedHoldBreathScreen
} from './state/onboarding';


const Stack = createNativeStackNavigator();


// Standard-Animation und erlaubte Animationen
const screenAnimationOptions = ({ route }) => {
  const animation = route.params?.animation ?? "slide_from_left";

  const allowedAnimations = [
    "slide_from_bottom",
    "slide_from_left",
    "slide_from_right",
    "fade",
    "none"
  ];

  return {
    animation: allowedAnimations.includes(animation)
      ? animation
      : "slide_from_left",
  };
};


export default function App() {
  let firstScreen = null;

  if (!userFinishedStartScreen.get()) {
    firstScreen = "/onboarding/page1";
  }
  else if (!userFinishedGeneralQuestionsScreen.get()) {
    firstScreen = "/onboarding/page2";
  }
  else if (!userFinishedHoldBreathScreen.get()) {
    firstScreen = "/onboarding/page3";
  }
  else {
    firstScreen = "/home";
  }


  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={firstScreen}
        screenOptions={{
          headerShown: false
        }}
      >

        <Stack.Screen
          name="/onboarding/page1"
          component={Onboarding1}
          options={screenAnimationOptions}
        />

        <Stack.Screen
          name="/onboarding/page2"
          component={Onboarding2}
          options={screenAnimationOptions}
        />

        <Stack.Screen
          name="/onboarding/page3"
          component={Onboarding3}
          options={screenAnimationOptions}
        />

        <Stack.Screen
          name="/home"
          component={HomeScreen}
          options={screenAnimationOptions}
        />

        <Stack.Screen
          name="/breathing_exercise/running"
          component={BreathingExerciseRunning}
          options={screenAnimationOptions}
        />

        <Stack.Screen
          name="/breathing_exercise/finished"
          component={BreathingExerciseFinished}
          options={screenAnimationOptions}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
