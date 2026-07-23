import React from 'react';
import { View, Text, Pressable } from 'react-native';
import exerciseStyles from '../styles/exerciseStyle';

const BreathingExerciseFinished = ({ navigation, route }) => {

  return (
    <View style={[exerciseStyles.container, exerciseStyles.finishedContainer]}>

      <Text style={exerciseStyles.title}>
        Exercise Complete
      </Text>

      <Text style={exerciseStyles.subtitle}>
        Great job! You finished your breathing exercise.
      </Text>


      <View style={exerciseStyles.finishedCircleContainer}>
        <View style={exerciseStyles.finishedCircle}>
          <Text style={exerciseStyles.checkmark}>
            ✓
          </Text>
        </View>
      </View>


      <Text style={exerciseStyles.footer}>
        Take a moment to relax and notice how you feel.
      </Text>


      <Pressable
        style={exerciseStyles.startButton}
        onPress={() => navigation.navigate('/home')}
      >
        <Text style={exerciseStyles.startButtonText}>
          Continue
        </Text>
      </Pressable>


    </View>
  );
};

export default BreathingExerciseFinished;