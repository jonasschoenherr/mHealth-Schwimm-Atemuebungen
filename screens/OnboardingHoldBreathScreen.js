import theme1 from "../styles/theme1";

import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable } from 'react-native';
import { Button } from 'react-native';
import { useState } from "react";

const OnboardingHoldBreathScreen = ({ navigation, route }) => {

    const styles = theme1;

    const [seconds, setSeconds] = useState(0);

    return (
        <View style={styles.container}>

            <Button title="Go Back" onPress={() => navigation.goBack()} />

            <Text style={styles.title}>
                Hold your breath for{"\n"}as long as you can
            </Text>

            <Text style={styles.subtitle}>
                Relax, take a deep breath, and start the{"\n"}
                timer. This is your starting point.
            </Text>

            <Text style={styles.timer}>
                00:00
            </Text>

             <View style={styles.timerButtons}>

                <Pressable style={styles.resetButton}>
                    <Text style={styles.circleButtonText}>
                        Reset
                    </Text>
                </Pressable>

                <Pressable style={styles.startButton}>
                    <Text style={styles.circleButtonText}>
                        Start
                    </Text>
                </Pressable>

            </View>

            <View style={{ height: 10 }} />

            <View style={styles.dots}>
                <View style={styles.dot}/>
                <View style={styles.dot}/>
                <View style={styles.whiteDot}/>
            </View>

            <Pressable style={styles.button} onPress={() => {
                navigation.navigate("/home");
              }}>
              <Text style={styles.buttonText}>Continue</Text>
            </Pressable>


            <StatusBar style="light"/>

        </View>
    );
}

export default OnboardingHoldBreathScreen;
