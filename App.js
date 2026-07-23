import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Onboarding1 from './screens/Onboarding1';
import Onboarding2 from './screens/Onboarding2';
import Onboarding3 from './screens/Onboarding3';
import Home from './screens/Home';
import Calendar from './screens/Calendar';
import Progress from './screens/Progress';
import Settings from './screens/Settings';
import BreathingExerciseRunning from './screens/BreathingExerciseRunning';
import BreathingExerciseFinished from './screens/BreathingExerciseFinished';

import {
  userFinishedOnboarding1,
  userFinishedOnboarding2,
  userFinishedOnboarding3
} from './state/onboarding';


const Stack = createNativeStackNavigator();


// Standard-Animation und erlaubte Animationen
const screenAnimationOptions = ({ route }) => {
  const animation = route.params?.animation ?? "slide_from_left";

  const allowedAnimations = [
    "slide_from_left",
    "slide_from_right",
    "slide_from_bottom",
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

  if (!userFinishedOnboarding1.get()) {
    firstScreen = "/onboarding/page1";
  }
  else if (!userFinishedOnboarding2.get()) {
    firstScreen = "/onboarding/page2";
  }
  else if (!userFinishedOnboarding3.get()) {
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
          component={Home}
          options={screenAnimationOptions}
        />

                <Stack.Screen
          name="/calendar"
          component={Calendar}
          options={screenAnimationOptions}
        />

        <Stack.Screen
          name="/progress"
          component={Progress}
          options={screenAnimationOptions}
        />

        <Stack.Screen
          name="/settings"
          component={Settings}
          options={screenAnimationOptions}
        />

        <Stack.Screen
          name="/home/breathing_exercise/running"
          component={BreathingExerciseRunning}
          options={screenAnimationOptions}
        />

        <Stack.Screen
          name="/home/breathing_exercise/finished"
          component={BreathingExerciseFinished}
          options={screenAnimationOptions}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
