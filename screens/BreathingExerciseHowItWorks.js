import React from 'react';
import { View, Text, Pressable } from 'react-native';
import exerciseStyles from '../styles/exerciseStyle';

const BreathingExerciseHowItWorks = ({ navigation, route }) => {
  const { exerciseName, duration } = route.params;

  return (
    <View style={exerciseStyles.container}>

      <Pressable
        style={exerciseStyles.quitButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={exerciseStyles.quitText}>Back</Text>
      </Pressable>

      <Text style={exerciseStyles.title}>
        How it works
      </Text>

      <Text style={exerciseStyles.subtitle}>
        {exerciseName}
      </Text>

      <View style={exerciseStyles.instructions}>

        <Text style={exerciseStyles.instruction}>
          • As the circle expands, inhale.
        </Text>

        <Text style={exerciseStyles.instruction}>
          • As it contracts, exhale.
        </Text>

        <Text style={exerciseStyles.instruction}>
          • Stay relaxed and follow the rhythm.
        </Text>

      </View>

      <View style={exerciseStyles.circleContainer}>
        <View style={exerciseStyles.outerCircle}>
          <View style={exerciseStyles.innerCircle} />
        </View>
      </View>

      <Text style={exerciseStyles.footer}>
        Press Start when you're ready.
      </Text>

      <Pressable
        style={exerciseStyles.startButton}
        onPress={() =>
          navigation.navigate('/home/breathing_exercise/running', {
            exerciseName,
            duration,
          })
        }
      >
        <Text style={exerciseStyles.startButtonText}>
          Start
        </Text>
      </Pressable>

    </View>
  );
};

export default BreathingExerciseHowItWorks;