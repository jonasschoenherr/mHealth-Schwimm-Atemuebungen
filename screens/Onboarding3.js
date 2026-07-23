import theme1 from "../styles/theme1";

import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable } from 'react-native';
import { Button } from 'react-native';
import { useState, useEffect  } from "react";
import { userFinishedOnboarding3 } from "../state/onboarding";


const Onboarding3 = ({ navigation, route }) => {

    const styles = theme1;

    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isRunning) {
            interval = setInterval(() => {
                setSeconds((prev) => prev + 1);
            }, 1000);
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isRunning]);

    const formatTime = (totalSecs) => {
        const mins = Math.floor(totalSecs / 60);
        const remainderSecs = totalSecs % 60;
        return `${mins.toString().padStart(2, '0')}:${remainderSecs.toString().padStart(2, '0')}`;
    };

    const handleStartStop = () => {
        setIsRunning((prev) => !prev);
    };

    const handleReset = () => {
        setIsRunning(false);
        setSeconds(0);
    };

    const isNotZero = seconds > 0;
    const formattedTime = formatTime(seconds);

    return (
        <View style={styles.container}>

            <Pressable
            style={styles.backButton}
            onPress={() => {
                navigation.navigate("/onboarding/page2", {
                    animation: "slide_from_left"
                });
            }}
            >    
            <Text style={styles.backButtonText}>Back</Text>
            </Pressable>


            <Text style={[styles.title, { marginTop: 28 }]}>
                Hold your breath for{"\n"}as long as you can
            </Text>

            <Text style={styles.subtitle}>
                Relax, take a deep breath, and start the{"\n"}
                timer. This is your starting point.
            </Text>

            <View style={{ height: 15 }} />

            <Text style={styles.timer}>
                {formattedTime}
            </Text>

            <View style={{ height: 15 }} />

            <View style={styles.timerButtons}>

                <Pressable style={styles.resetButton} onPress={handleReset}>
                    <Text style={isNotZero ? styles.circleButtonTextResetActive : styles.circleButtonTextReset}>
                        Reset
                    </Text>
                </Pressable>

                <Pressable 
                    style={isRunning ? styles.startButtonActive : styles.startButton} 
                    onPress={handleStartStop}
                >
                    <Text style={isRunning ? styles.circleButtonTextStop : styles.circleButtonTextStart}>
                        {isRunning ? "Stop" : "Start"}
                    </Text>
                </Pressable>

            </View>


            <View style={styles.dots}>
                <View style={styles.dot}/>
                <View style={styles.dot}/>
                <View style={styles.whiteDot}/>
            </View>

            <Pressable style={styles.button} onPress={() => {
                userFinishedOnboarding3.set(true);
                navigation.navigate("/home", {
                    animation: "slide_from_right"
                });
              }}>
              <Text style={styles.buttonText}>Continue</Text>
            </Pressable>

            <Pressable
                style={{
                    position: "absolute",
                    bottom: 0,
                    alignSelf: "center",
                }}
                onPress={() => {
                    navigation.navigate("/home", {
                    animation: "slide_from_right"
                    });
                }}
            >
                <Text style={[styles.skipText, {marginBottom: 30,}]}>
                    Skip onboarding and continue{"\n"}with default values
                </Text>
            </Pressable>


            <StatusBar style="light"/>

        </View>
    );
}

export default Onboarding3;
