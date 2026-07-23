import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Pressable, Animated, Easing } from 'react-native';
import exerciseStyles from '../styles/exerciseStyle';

const BreathingExerciseRunning = ({ navigation, route }) => {
  const { exerciseName, duration } = route.params;

  const [seconds, setSeconds] = useState(duration);
  const [isRunning, setIsRunning] = useState(true);

  const circleSize = useRef(new Animated.Value(120)).current;


  // Countdown timer
  useEffect(() => {
    let interval = null;

    if (isRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    }

    if (seconds === 0) {
      setIsRunning(false);

      navigation.navigate('/home/breathing_exercise/finished', {
        exerciseName,
      });
    }

    return () => {
      if (interval) clearInterval(interval);
    };

  }, [isRunning, seconds]);

    //animation
  const breatheAnimation = useRef(null);

  useEffect(() => {
    if (isRunning) {
      breatheAnimation.current = Animated.loop(
        Animated.sequence([
          Animated.timing(circleSize, {
            toValue: 320,
            duration: 4000,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: false,
          }),

          Animated.timing(circleSize, {
            toValue: 120,
            duration: 4000,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: false,
          }),
        ])
      );

      breatheAnimation.current.start();
    } else {
      breatheAnimation.current?.stop();
    }

    return () => {
      breatheAnimation.current?.stop();
    };

  }, [isRunning]);


  const formatTime = (totalSecs) => {
    const mins = Math.floor(totalSecs / 60);
    const remainderSecs = totalSecs % 60;

    return `${mins}:${remainderSecs.toString().padStart(2, '0')}`;
  };


    const handlePause = () => {
      setIsRunning(prev => !prev);
    };


    const handleSkip = () => {
      setIsRunning(false);

      navigation.navigate('/home/breathing_exercise/finished', {
        exerciseName,
      });
    };


  return (
    <View style={exerciseStyles.container}>

      <Pressable
        style={exerciseStyles.quitButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={exerciseStyles.quitText}>
          Quit
        </Text>
      </Pressable>


      <Text style={exerciseStyles.title}>
        {exerciseName}
      </Text>


      <Text style={exerciseStyles.timer}>
        {formatTime(seconds)}
      </Text>


      <View style={exerciseStyles.circleContainer}>
        <Animated.View
          style={[
            exerciseStyles.outerCircle,
            {
              width: circleSize,
              height: circleSize,
              borderRadius: circleSize.interpolate({
                inputRange: [120, 320],
                outputRange: [60, 160],
              }),
            },
          ]}
        />

        <View style={exerciseStyles.innerCircle} />
      </View>

      <Text style={exerciseStyles.phase}>
        {isRunning ? "Inhale" : "Paused"}
      </Text>


      <View style={exerciseStyles.bottomButtons}>

        <Pressable
          style={exerciseStyles.secondaryButton}
          onPress={handlePause}
        >
          <Text style={exerciseStyles.secondaryButtonText}>
            {isRunning ? "Pause" : "Resume"}
          </Text>
        </Pressable>


        <Pressable
          style={exerciseStyles.secondaryButton}
          onPress={handleSkip}
        >
          <Text style={exerciseStyles.secondaryButtonText}>
            Skip
          </Text>
        </Pressable>

      </View>

    </View>
  );
};

export default BreathingExerciseRunning;