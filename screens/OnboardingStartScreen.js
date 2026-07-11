import DefaultScreenContent from "../elements/DefaultScreenContent";
import { userFinishedStartScreen } from '../state/onboarding';
import theme1 from "../styles/theme1";

import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { Button } from 'react-native';


const OnboardingStartScreen = ({ navigation, route }) => {
    const styles = theme1;

    return (
        <View style={styles.container}>

        <Text>Welcome Screen</Text>
        {/* Go back using the navigation object */}
        <Button title="Go Back" onPress={() => navigation.goBack()} />

        <Text style={styles.title}>Welcome to SwimBreath</Text>

        <View style={styles.item}>
            <FontAwesome6 name="user-doctor" size={30} color="#F5A623" style={styles.image}/>
            <View>
            <Text style={styles.heading}>No experience needed</Text>
            <Text style={styles.description}>
                The app provides essential breathing guidance.
            </Text>
            </View>
        </View>

        <View style={styles.item}>
            <FontAwesome6 name="heart-pulse" size={30} color="#F5A623" style={styles.image}/>
            <View>
            <Text style={styles.heading}>Steady breath</Text>
            <Text style={styles.description}>
                Train your breathing before swimming.
            </Text>
            </View>
        </View>

        <View style={styles.item}>
            <FontAwesome6 name="chart-line" size={30} color="#F5A623" style={styles.image}/>
            <View>
            <Text style={styles.heading}>Track your progress</Text>
            <Text style={styles.description}>
                Monitor your improvement over time.
            </Text>
            </View>
        </View>

        <Pressable style={styles.button} onPress={() => {
            userFinishedStartScreen.set(true);
            navigation.navigate("/onboarding/general_questions");
          }}>
          <Text style={styles.buttonText}>Continue</Text>
        </Pressable>

        <StatusBar style="light" />

        </View>
    );
}

export default OnboardingStartScreen;
